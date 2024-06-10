import { FetchOrdersDoneModel } from "@/models/order/fetch-orders-done.model";
import { Order } from "@/models/types/order";

import { setLocationSchema } from "@/presenter/validations/set-location.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface FetchOrdersDoneControllerResponse {
    data?: Order[] | null
    error?: ValidationError[] | null
}

export class FetchOrdersDoneController {
    private fetchOrdersDoneModel: FetchOrdersDoneModel

    constructor() {
        this.fetchOrdersDoneModel = new FetchOrdersDoneModel()
    }

    async handle(location: string): Promise<FetchOrdersDoneControllerResponse> {
        const result = setLocationSchema.safeParse(location)

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { city } = result.data

        const orders = await this.fetchOrdersDoneModel.execute(city)

        if (orders) {
            return { data: orders.ordersDone, error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Fetch orders failed." }] }
        }
    }
}