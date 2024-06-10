import { Order } from "../types/order"
import { api } from "../api"

interface GetOrderByTrackingCodeResponse {
    orderByTrackingCode: Order | null
}

interface IGetOrderByTrackingCodeModel {
    execute(trackingCode: string): Promise<GetOrderByTrackingCodeResponse>
}

export class GetOrderByTrackingCodeModel implements IGetOrderByTrackingCodeModel {
    async execute(trackingCode: string): Promise<GetOrderByTrackingCodeResponse> {
        const response = await api(`/recipient-query?trackingCode=${trackingCode}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        if (response.ok) {
            const data = await response.json()

            return {
                orderByTrackingCode: data.orders
            }
        }

        return {
            orderByTrackingCode: null
        }
    }
}