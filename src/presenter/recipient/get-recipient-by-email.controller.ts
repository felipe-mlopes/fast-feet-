import { GetRecipientByEmailModel } from "@/models/recipient/get-recipient-by-email.model";
import { Recipient } from "@/models/types/recipient";

import { recipientEmailSchema } from "@/presenter/validations/recipient-email.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface GetRecipientByEmailControllerResponse {
    data?: Recipient | null
    error?: ValidationError[] | null
}

export class GetRecipientByEmailController {
    private getRecipientByEmailModel: GetRecipientByEmailModel

    constructor() {
        this.getRecipientByEmailModel = new GetRecipientByEmailModel()
    }

    async handle(recipientEmail: string): Promise<GetRecipientByEmailControllerResponse> {
        const result = recipientEmailSchema.safeParse({ email: recipientEmail })

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { email } = result.data

        const recipient = await this.getRecipientByEmailModel.execute(email)

        if (recipient) {
            return { data: recipient.recipient, error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Get recipient failed." }] }
        }
    }
}