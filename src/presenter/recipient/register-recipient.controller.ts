import { redirect } from "next/navigation"

import { RegisterRecipientModel } from "@/models/recipient/register-recipient.model"

import { formSchemaRegisterRecipient } from "@/presenter/validations/register-recipient.validation"

import { ValidationError } from "@/view/ui-logic/types/form-state"

interface RegisterRecipientControllerResponse {
    data?: string | null
    error?: ValidationError[] | null
}

export class RegisterRecipientController {
    private registerRecipientModel: RegisterRecipientModel

    constructor() {
        this.registerRecipientModel = new RegisterRecipientModel()
    }

    async handle(formData: FormData): Promise<RegisterRecipientControllerResponse> {
        const rawFormData = Object.fromEntries(formData.entries())
        const result = formSchemaRegisterRecipient.safeParse(rawFormData)

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { clientName, clientEmail, address, neighborhood, city, state, zipcode } = result.data

        const addressFormat = address.street + ', ' + address.number + ' ' + address.complement

        const isRegisteredRecipient = await this.registerRecipientModel.execute({
            clientName,
            clientEmail,
            address: addressFormat,
            neighborhood,
            city,
            state,
            zipcode
        })

        if (isRegisteredRecipient) {
            redirect("/admin");
        } else {
            return { data: null, error: [{ path: [], message: "Register recipient failed." }] };
        }
    }
}