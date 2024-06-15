import { GetOrderByDetailsModel } from "@/models/order/get-order-by-details.model";
import { Order } from "@/models/types/order";

import { setIdSchema } from "@/presenter/validations/set-id.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface GetOrderByDetailsControllerResponse {
    data?: Order | null
    error?: ValidationError[] | null
}

export class GetOrderByDetailsController {
    private getOrderByDetailsModel: GetOrderByDetailsModel
    
    constructor() {
        this.getOrderByDetailsModel = new GetOrderByDetailsModel()
    }

    async handle(id: string): Promise<GetOrderByDetailsControllerResponse> {
        const result = setIdSchema.safeParse({ orderId: id })

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { orderId } = result.data

        const order = await this.getOrderByDetailsModel.execute(orderId)

        if (order) {
            return { data: order.orderByDetails, error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Get order failed." }] }
        }
    }
}