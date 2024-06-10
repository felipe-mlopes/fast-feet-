import { getSession } from "../auth/auth"
import { api } from "../api"

interface RegisterRecipientResquest {
    clientName: string, 
    clientEmail: string, 
    zipcode: number, 
    address: string, 
    neighborhood: string, 
    city: string, 
    state: string,
}

interface IRegisterRecipientModel {
    execute({ clientName, clientEmail, zipcode, address, neighborhood, city, state }: RegisterRecipientResquest): Promise<boolean>
}

export class RegisterRecipientModel implements IRegisterRecipientModel {

    async execute({ clientName, clientEmail, zipcode, address, neighborhood, city, state }: RegisterRecipientResquest): Promise<boolean> {
        const { token } = await getSession()

        const response = await api('/recipients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name: clientName,
                email: clientEmail,
                address,
                zipcode,
                neighborhood,
                city,
                state
            })
        })
        
        if (response.ok) {
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}