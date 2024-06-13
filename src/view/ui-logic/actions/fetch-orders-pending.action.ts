'use server'

import { FetchOrdersPendingController } from "@/presenter/order/fetch-orders-pending.controller"

export async function fetchOrdersPendingAction(city: string) {
    const fetchhOrdersPendingController = new FetchOrdersPendingController()

    const { data, error } = await fetchhOrdersPendingController.handle(city)
    
    return {
        data,
        error
    }
}