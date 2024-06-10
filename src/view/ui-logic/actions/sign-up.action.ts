'use server'

import { SignUpController } from "@/presenter/login/sign-up.controller";

import { FormStateTypes } from "@/view/ui-logic/types/form-state";

export async function signUpAction(formData: FormData): Promise<FormStateTypes> {
    const signUpPresenter = new SignUpController()

    return await signUpPresenter.execute(formData)
}