import { Order } from "../types/order"
import { getSession } from "../auth/auth"
import { api } from "../api"

interface GetOrdersDoneResponse {
    ordersDone: Order[] | null
}

interface IGetOrdersDoneModel {
    handle(city: string): Promise<GetOrdersDoneResponse>
}

export class GetOrdersDoneModel implements IGetOrdersDoneModel {
    async handle(city: string): Promise<GetOrdersDoneResponse> {
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