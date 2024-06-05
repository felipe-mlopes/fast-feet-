'use server'

import { SignInPresenter } from "@/presenter/login/sign-in.presenter"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function signInAction(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const signInPresenter = new SignInPresenter()

    return await signInPresenter.handleFormSubmit(formData)
}