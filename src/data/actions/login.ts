'use server'

import { redirect } from "next/navigation"

import { api } from "../api"
import { getAuthData, getSession, setAuthData } from "./auth"

import { formSchemaSignIn, formSchemaSignUp } from "@/utils/zod-validations"
import { FormStateTypes } from "@/types"

export async function signInAction(
    prevState: FormStateTypes,
    formData: FormData,
): Promise<FormStateTypes> {
    const session = await getSession()

    const rawFormData = Object.fromEntries(formData.entries())
    const result = formSchemaSignIn.safeParse(rawFormData)
    
    if (!result.success) {
        return { error: result.error.issues }
    }
    
    const { cpf, password } = result.data

    const response = await api('/deliveryman/sessions', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            cpf,
            password
        })
     })

     if (response.ok) {
        const data = await response.json()
        await setAuthData(data.access_token)

        const { payload } = await getAuthData()

        if (payload.role === 'ADMIN') {
            redirect("/home")
        }

        session.token = data.access_token
        session.sub = payload.sub
        session.role = payload.role
        session.isLoggedIn = true

        await session.save()
        redirect("/deliveries/pending")

     } else {
        const data = await response.json()

        return { error: data.error }
     }
}

export async function logoutAction() {
    const session = await getSession()

    session.destroy()
    redirect('/')
}

export async function signUpAction(
    prevState: FormStateTypes,
    formData: FormData,
): Promise<FormStateTypes> {
    const rawFormData = Object.fromEntries(formData.entries())
    const result = formSchemaSignUp.safeParse(rawFormData)
    
    if (!result.success) {
        return { error: result.error.issues }
    }
    
    const { name, email, cpf, password } = result.data

    const response = await api('/deliveryman', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            name,
            email,
            cpf,
            password
        })
     })     

     if (response.ok) {
        redirect("/signin")

     } else {
        const data = await response.json()

        return { error: data.error }
     }
}

