'use server'

import { SignInFormPresenter } from "@/presenter/login/sign-in.presenter"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function signInAction(state: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const signInPresenter = new SignInFormPresenter()

    return await signInPresenter.handleFormSubmit(formData)
}