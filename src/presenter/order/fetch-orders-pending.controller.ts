import { FetchOrdersPendingModel } from "@/models/order/fetch-orders-pending.model";
import { Order } from "@/models/types/order";

import { setLocationSchema } from "@/presenter/validations/set-location.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface FetchOrdersPendingControllerResponse {
    data?: Order[] | null
    error?: ValidationError[] | null
}

export class FetchOrdersPendingController {
    private fetchOrdersPendingModel: FetchOrdersPendingModel

    constructor() {
        this.fetchOrdersPendingModel = new FetchOrdersPendingModel()
    }

    async handle(location: string): Promise<FetchOrdersPendingControllerResponse> {
        const result = setLocationSchema.safeParse(location)

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { city } = result.data

        const orders = await this.fetchOrdersPendingModel.execute(city)

        if (orders) {
            return { data: orders.ordersPending, error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Fetch orders failed." }] }
        }
    }
}