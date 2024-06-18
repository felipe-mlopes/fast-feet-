'use server'

import { GetRecipientByEmailController } from "@/presenter/controllers/recipient/get-recipient-by-email.controller"


export async function getRecipientByEmailAction(email: string) {
    const getRecipientByEmailController = new GetRecipientByEmailController()

    const { data, error } = await getRecipientByEmailController.handle(email)

    return {
        data,
        error
    }
}