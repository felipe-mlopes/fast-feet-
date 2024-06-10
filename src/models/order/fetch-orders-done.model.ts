import { Order } from "../types/order"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface FetchOrdersDoneResponse {
    ordersDone: Order[] | null
}

interface IFetchOrdersDoneModel {
    handle(city: string): Promise<FetchOrdersDoneResponse>
}

export class FetchOrdersDoneModel implements IFetchOrdersDoneModel {
    async handle(city: string): Promise<FetchOrdersDoneResponse> {
        const { token } = await getSession()

        const response = await api(`/orders/done?city=${city}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        
        if (response.ok) {
            const data = await response.json()

            return {
                ordersDone: data.orders
            }
        }

        return {
            ordersDone: null
        }
    }
}