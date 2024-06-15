'use server'

import { LoginController } from "@/presenter/controllers/login/login.controller"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function loginAction(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const loginController = new LoginController()

    return await loginController.handle(formData)
}