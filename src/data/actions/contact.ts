'use server'

import { api } from "../api"

import { FormStateTypes } from "@/types"
import { formSchemaContact } from "@/utils/zod-validations"

export async function sendContactAction(
    prevState: FormStateTypes,
    formData: FormData,
): Promise<FormStateTypes> {
    const rawFormData = Object.fromEntries(formData.entries())
    const result = formSchemaContact.safeParse(rawFormData)
    
    if (!result.success) {
        return { error: result.error.issues }
    }
    
    const { name, email, description } = result.data

    return {
        
    }

    /* const response = await api('/deliveryman/sessions', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            
        })
     }) */

     /* if (response.ok) {
        

     } else {
        const data = await response.json()

        return { error: data.error }
     } */
}