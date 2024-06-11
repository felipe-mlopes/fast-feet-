import { Order } from "../types/order"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface GetOrderByDetailsResponse {
    orderByDetails: Order | null
}

interface IGetOrderByDetailsModel {
    execute(orderId: string): Promise<GetOrderByDetailsResponse>
}

export class GetOrderByDetailsModel implements IGetOrderByDetailsModel {
    async execute(orderId: string): Promise<GetOrderByDetailsResponse> {
        const { token } = await getSession()

        const response = await api(`/orders/${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        if (response.ok) {
            const data = await response.json()

            return {
                orderByDetails: data.order
            }
        }

        return {
            orderByDetails: null
        }
    }
}