'use server'

import { SignUpPresenter } from "@/presenter/login/sign-up.presenter";
import { FormStateTypes } from "@/view/ui-logic/types/form-state";

export async function signUpAction(formData: FormData): Promise<FormStateTypes> {
    const signUpPresenter = new SignUpPresenter()

    return await signUpPresenter.handleFormSubmit(formData)
}