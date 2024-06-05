'use server'

import { LoginPresenter } from "@/presenter/login/login.presenter"
import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function loginAction(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const loginPresenter = new LoginPresenter()

    return await loginPresenter.handleFormSubmit(formData)
}