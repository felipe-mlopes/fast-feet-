import { Order } from "../types/order"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface FetchOrdersPendingResponse {
    ordersPending: Order[] | null
}

interface IFetchOrdersPendingModel {
    handle(city: string): Promise<FetchOrdersPendingResponse>
}

export class FetchOrdersPendingModel implements IFetchOrdersPendingModel {
    async handle(city: string): Promise<FetchOrdersPendingResponse> {
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