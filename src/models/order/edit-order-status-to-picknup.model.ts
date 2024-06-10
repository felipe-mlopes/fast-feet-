import { getSession } from "../auth/auth"
import { api } from "../api"

interface IEditOrderStatusToPicknUpModel {
    execute(orderId: string): Promise<boolean>
}

export class EditOrderStatusToPicknUpModel implements IEditOrderStatusToPicknUpModel {
    async execute(orderId: string): Promise<boolean> {
        const { token } = await getSession()

        const response = await api(`/orders/${orderId}/picknup`, {
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