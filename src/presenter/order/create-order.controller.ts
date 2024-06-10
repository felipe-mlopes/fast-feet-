import { redirect } from "next/navigation";

import { CreateOrderModel } from "@/models/order/create-order.model";
import { GetRecipientByEmailModel } from "@/models/recipient/get-recipient-by-email.model";

import { formSchemaCreateOrder } from "@/presenter/validations/create-order.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface CreateOrderControllerResponse {
    data?: string | null
    error?: ValidationError[] | null
}

export class CreateOrderController {
    private getRecipientEmailModel: GetRecipientByEmailModel
    private createOrderModel: CreateOrderModel

    constructor() {
        this.getRecipientEmailModel = new GetRecipientByEmailModel()
        this.createOrderModel = new CreateOrderModel(this.getRecipientEmailModel)
    }

    async handle(formData: FormData): Promise<CreateOrderControllerResponse> {
        const rawFormData = Object.fromEntries(formData.entries())
        const result = formSchemaCreateOrder.safeParse(rawFormData)

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { email, title } = result.data

        const recipient = await this.getRecipientEmailModel.execute(email)

        if (!recipient) {
            return { data: null, error: [{ path: [], message: "Recipient failed." }] }
        }

        const isCreatedOrder = await this.createOrderModel.execute({ recipientEmail: recipient.recipient?.id!, title })

        if (isCreatedOrder) {
            redirect("/admin");
        } else {
            return { data: null, error: [{ path: [], message: "Create order failed." }] };
        }
    }
}