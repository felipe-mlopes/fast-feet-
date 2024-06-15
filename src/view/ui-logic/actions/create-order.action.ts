'use server'

import { CreateOrderController } from "@/presenter/controllers/order/create-order.controller"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function createOrderAction(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const createOrderController = new CreateOrderController()

    return await createOrderController.handle(formData)
}