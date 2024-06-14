import { FetchRecipientEmailsBySearchModel } from "@/models/recipient/fetch-recipient-emails-by-search.model";
import { RecipientEmail } from "@/models/types/recipient-email";

import { ValidationError } from "@/view/ui-logic/types/form-state";
import { recipientEmailSchema } from "../validations/recipient-email.validation";

interface FetchRecipientEmailsBySearchControllerResponse {
    data?: RecipientEmail[] | null
    error?: ValidationError[] | null
}

export class FetchRecipientEmailsBySearchController {
    private fetchRecipientEmailsBySearchModel: FetchRecipientEmailsBySearchModel

    constructor() {
        this.fetchRecipientEmailsBySearchModel = new FetchRecipientEmailsBySearchModel()
    }

    async handle(search: string): Promise<FetchRecipientEmailsBySearchControllerResponse> {
        const result = recipientEmailSchema.safeParse({ email: search })

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { email } = result.data

        const recipientEmails = await this.fetchRecipientEmailsBySearchModel.execute(email)

        if (recipientEmails) {
            return { data: recipientEmails.recipientEmails && [], error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Fetch orders failed." }] }
        }
    }
}