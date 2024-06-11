'use server'

import { GetOrderByDetailsController } from "@/presenter/order/get-order-by-details.controller"

export async function getOrderByDetailsAction(orderId: string) {
    const getOrderByDetailsController = new GetOrderByDetailsController()

    const { data, error } = await getOrderByDetailsController.handle(orderId)

    return {
        data,
        error
    }
}