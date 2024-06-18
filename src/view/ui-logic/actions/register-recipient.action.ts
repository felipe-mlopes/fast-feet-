'use server'

import { RegisterRecipientController } from "@/presenter/controllers/recipient/register-recipient.controller"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function registerRecipientAction(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const registerRecipientController = new RegisterRecipientController()

    return await registerRecipientController.handle(formData)
}