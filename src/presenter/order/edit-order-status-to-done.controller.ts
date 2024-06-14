import { EditOrderStatusToDoneModel } from "@/models/order/edit-order-status-to-done.model";

import { setIdSchema } from "@/presenter/validations/set-id.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface EditOrderStatusToDoneControllerResponse {
    data?: string | null
    error?: ValidationError[] | null
}

export class EditOrderStatusToDoneController {
    private editOrderStatusToDoneModel: EditOrderStatusToDoneModel

    constructor() {
        this.editOrderStatusToDoneModel = new EditOrderStatusToDoneModel()
    }

    async handle(id: string): Promise<EditOrderStatusToDoneControllerResponse> {
        const result = setIdSchema.safeParse(id)

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { orderId } = result.data

        const order = await this.editOrderStatusToDoneModel.execute(orderId)

        if (order) {
            return { data: 'Order status edited successfully.', error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Fetch orders failed." }] }
        }
    }
}