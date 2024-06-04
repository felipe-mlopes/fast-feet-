import { Recipient } from "../types/recipient"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface GetRecipientByEmailResponse {
    recipient: Recipient | null
}

interface IFetchRecipientEmailsBySearchModel {
    handle(email: string): Promise<GetRecipientByEmailResponse>
}

export class GetRecipientByEmailModel implements IFetchRecipientEmailsBySearchModel {
    async handle(email: string): Promise<GetRecipientByEmailResponse> {
        const { token } = await getSession()

        const response = await api(`/recipient?recipientEmail=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()

        if (response.ok) {
            return {
                recipient: data.recipient
            }
        }

        return {
            recipient: null
        }
    }
}