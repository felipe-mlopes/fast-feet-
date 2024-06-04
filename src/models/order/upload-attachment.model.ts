import { getSession } from "../auth/auth"
import { api } from "../api"

interface IUploadAttachmentModel {
    handle(file: File, orderId: string): Promise<boolean>
}

export class UploadAttachmentModel implements IUploadAttachmentModel {
    async handle(file: File, orderId: string): Promise<boolean> {
        const { token } = await getSession()

        const response = await api(`orders/${orderId}/attachment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                file
            })
        })
        
        if (response.ok) {
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}