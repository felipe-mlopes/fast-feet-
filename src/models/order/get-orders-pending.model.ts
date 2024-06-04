import { Order } from "../types/order"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface GetOrdersPendingResponse {
    ordersPending: Order[] | null
}

interface IGetOrdersPendingModel {
    handle(city: string): Promise<GetOrdersPendingResponse>
}

export class GetOrdersPendingModel implements IGetOrdersPendingModel {
    async handle(city: string): Promise<GetOrdersPendingResponse> {
        const { token } = await getSession()

        const response = await api(`/orders/pending?city=${city}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        
        if (response.ok) {
            const data = await response.json()

            return {
                ordersPending: data.orders
            }
        }

        return {
            ordersPending: null
        }
    }
}