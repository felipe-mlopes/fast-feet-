'use server'

import { EditOrderStatusToPicknUpController } from "@/presenter/order/edit-order-status-to-pickn-up.controller"

export async function editOrderStatusToPicknUpAction(orderId: string) {
    const editOrderStatusToPicknUpController = new EditOrderStatusToPicknUpController()

    const { data, error } = await editOrderStatusToPicknUpController.handle(orderId)

    return {
        data,
        error
    }
}