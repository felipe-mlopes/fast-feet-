import { api } from "../api"
import { getSession } from "../auth/auth"

interface IEditOrderStatusToDoneModel {
    execute(orderId: string): Promise<boolean>
}

export class EditOrderStatusToDoneModel implements IEditOrderStatusToDoneModel {
    async execute(orderId: string): Promise<boolean> {
        const { token } = await getSession()

        const response = await api(`/orders/${orderId}/done`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        
        if (response.ok) {
            return Promise.resolve(true)
        }

        return Promise.resolve(false)
    }
}