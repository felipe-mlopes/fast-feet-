import { GetOrderByTrackingCodeModel } from "@/models/order/get-order-by-tracking-code.model";
import { Order } from "@/models/types/order";

import { formSchemaTrackingCode } from "@/presenter/validations/get-order-by-tracking-code.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface GetOrderByTrackingCodeControllerResponse {
    data?: Order | null
    error?: ValidationError[] | null
}

export class GetOrderByTrackingCodeController {
    private getOrderByTrackingCodeModel: GetOrderByTrackingCodeModel

    constructor() {
        this.getOrderByTrackingCodeModel = new GetOrderByTrackingCodeModel()
    }

    async handle(formData: FormData): Promise<GetOrderByTrackingCodeControllerResponse> {
        const rawFormData = Object.fromEntries(formData.entries())
        const result = formSchemaTrackingCode.safeParse(rawFormData)  
        
        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { trackingCode } = result.data

        const order = await this.getOrderByTrackingCodeModel.execute(trackingCode)

        if (order) {
            return { data: order.orderByTrackingCode, error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Get order failed." }] }
        }
    }
}