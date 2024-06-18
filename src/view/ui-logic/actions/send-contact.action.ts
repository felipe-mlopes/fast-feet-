'use server'

import { Email } from "@/presenter/adpaters/mailing/send-mail.adapter"
import { SendContactFormController } from "@/presenter/controllers/contact/send-contact-form.controller"

import { ValidationError } from "@/view/ui-logic/types/form-state"

interface SendContactProps {
    data?: Email | null
    error?: ValidationError[] | null
}

export async function sendContactAction(_: SendContactProps, formData: FormData): Promise<SendContactProps> {
    const sendContactFormController = new SendContactFormController()

    const result = await sendContactFormController.handle(formData)

    if (result) {
        return { data: result.data, error: null }
    } else {
        return { data: null, error: [{ message: 'Send email failed.' }] }
    }
}