import { getSession } from "@/models//auth/auth"
import { api } from "@/models//api"
import { RecipientEmail } from "@/models//types/recipient-email"

interface FetchRecipientEmailsBySearchResponse {
    recipientEmails: string[] | null
}

interface IFetchRecipientEmailsBySearchModel {
    execute(search: string): Promise<FetchRecipientEmailsBySearchResponse>
}

export class FetchRecipientEmailsBySearchModel implements IFetchRecipientEmailsBySearchModel {
    async execute(search: string): Promise<FetchRecipientEmailsBySearchResponse> {
        const { token } = await getSession()

        const response = await api(`/recipient-email?search=${search}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data: RecipientEmail = await response.json()
        
        const transformedData = data.recipients.map(item => item.email)
                
        if (response.ok) {
            return {
                recipientEmails: transformedData
            }
        }

        return {
            recipientEmails: null
        }
    }
}