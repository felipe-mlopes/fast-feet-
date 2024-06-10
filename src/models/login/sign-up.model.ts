import { api } from "../api"

interface SignUpData {
    name: string
    email: string
    cpf: string
    password: string
}

interface ISignUpModel {
    execute({ name, email, cpf, password }: SignUpData): Promise<boolean>
}

export class SignUpModel implements ISignUpModel {
    async execute({ name, email, cpf, password }: SignUpData): Promise<boolean> {
        const response = await api('/deliveryman', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                name,
                email,
                cpf,
                password
            })
        })
        
        if (response.ok) {
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}