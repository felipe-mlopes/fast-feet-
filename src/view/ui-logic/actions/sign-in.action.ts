'use server'

import { SignInController } from "@/presenter/controllers/login/sign-in.controller"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function signInAction(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const signInPresenter = new SignInController()

    return await signInPresenter.handle(formData)
}