'use server'

import { Order } from "@/models/types/order"

import { GetOrderByTrackingCodeController } from "@/presenter/controllers/order/get-order-by-tracking-code.controller"

import { ValidationError } from "@/view/ui-logic/types/form-state"

interface GetOrderByTrackingCodeActionResponse {
    data?: Order | null
    error?: ValidationError[] | null
}

export async function getOrderByTrackingCodeAction(state: GetOrderByTrackingCodeActionResponse, formData: FormData): Promise<GetOrderByTrackingCodeActionResponse> {
    const getOrderByTrackingCodeController = new GetOrderByTrackingCodeController()

    const result = await getOrderByTrackingCodeController.handle(formData)

    if (result.error) {
        return {
            data: null,
            error: [{ path: [], message: "Get order failed." }]
        }
    }

    return {
        data: result.data,
        error: null,
    }
}