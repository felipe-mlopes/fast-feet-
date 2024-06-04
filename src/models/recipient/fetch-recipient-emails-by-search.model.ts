import { RecipientEmail } from "../types/recipient-email"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface FetchRecipientEmailsBySearchResponse {
    recipientEmails: RecipientEmail | null
}

interface IFetchRecipientEmailsBySearchModel {
    handle(search: string): Promise<FetchRecipientEmailsBySearchResponse>
}

export class FetchRecipientEmailsBySearchModel implements IFetchRecipientEmailsBySearchModel {
    async handle(search: string): Promise<FetchRecipientEmailsBySearchResponse> {
        const { token } = await getSession()

        const response = await api(`/recipient-email?search=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()

        if (response.ok) {
            return {
                recipientEmails: data.recipientEmails
            }
        }

        return {
            recipientEmails: null
        }
    }
}