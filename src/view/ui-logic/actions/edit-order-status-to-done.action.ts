'use server'

import { EditOrderStatusToDoneController } from "@/presenter/controllers/order/edit-order-status-to-done.controller"

export async function editOrderStatusToDoneAction(orderId: string) {
    const editOrderStatusToDoneController = new EditOrderStatusToDoneController()

    const { data, error } = await editOrderStatusToDoneController.handle(orderId)

    return {
        data,
        error
    }
}