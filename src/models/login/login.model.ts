import { redirect } from "next/navigation";

import { getAuthData, setAuthData, getSession } from "../auth/auth";
import { api } from "../api";

interface LoginData {
    email: string
    password: string
}

interface ILoginModel {
    execute({ email, password }: LoginData): Promise<boolean>
}

export class LoginModel implements ILoginModel {
    async execute({ email, password }: LoginData): Promise<boolean> {
        const session = await getSession()
        
        const response = await api('/deliveryman/sessions', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                email,
                password
            })
        })
        
        if (response.ok) {
            const data = await response.json()
            await setAuthData(data.access_token);

            const payload = await getAuthData()

            if (payload?.role === 'DELIVERYMAN') {
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