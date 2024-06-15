'use server'

import { FetchOrdersDoneController } from "@/presenter/controllers/order/fetch-orders-done.controller"

export async function fetchOrdersDoneAction(city: string) {
    const fetchhOrdersDoneController = new FetchOrdersDoneController()

    const { data, error } = await fetchhOrdersDoneController.handle(city)
    
    return {
        data,
        error
    }
}