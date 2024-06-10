import { redirect } from "next/navigation"

import { api } from "../api"
import { getAuthData, getSession, setAuthData } from "../auth/auth"

interface SignInData {
    cpf: string
    password: string
}

interface ISignInModel {
    execute({ cpf, password }: SignInData): Promise<boolean>
}

export class SignInModel implements ISignInModel {
    async execute({ cpf, password }: SignInData): Promise<boolean> {        
        const session = await getSession()

        const response = await api('/deliveryman/sessions', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                cpf,
                password
            })
        })
        
        if (response.ok) {
            const data = await response.json()
            await setAuthData(data.access_token);

            const payload = await getAuthData()

            if (payload?.role === 'ADMIN') {
                redirect("/home")
            }

            session.token = data.access_token
            session.sub = payload?.sub
            session.role = payload?.role
            session.isLoggedIn = true

            await session.save()

            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}