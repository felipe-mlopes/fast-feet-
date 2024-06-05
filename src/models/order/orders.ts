'use server'

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

import { api } from "../api"
import { getSession } from "../auth/auth"
import { getRecipientByEmail } from "../recipient/recipients"

import { formSchemaCreateOrder } from "@/presenter/validations/create-order.validation"
import { formSchemaUploadAttachment } from "@/presenter/validations/upload-attachment.validation"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function getOrdersPending(city: string) {
    const { token } = await getSession()

    const response = await api(`/orders/pending?city=${city}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    return {
        ordersPending: data.orders
    }
}

export async function getOrdersDone(city: string) {
    const { token } = await getSession()

    const response = await api(`/orders/done?city=${city}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    return {
        ordersDone: data.orders
    }
}

export async function getOrderByDetails(orderId: string) {
    const { token } = await getSession()

    const response = await api(`/orders/${orderId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json()

    return {
        order: data.order
    }
}

export async function getOrderByTrackingCode(trackingCode: string) {
    const response = await api(`/recipient-query?trackingCode=${trackingCode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (!response.ok) {
        return {
            order: null
        }
    }

    const data = await response.json()

    return {
        order: data.order
    }
}

export async function createOrder(prevState: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const { token } = await getSession()

    const rawFormData = Object.fromEntries(formData.entries())
    const result = formSchemaCreateOrder.safeParse(rawFormData)

    if (!result.success) {
        console.error(result.error.issues)
        return { error: result.error.issues }
    }

    const { email, title } = result.data

    const { recipient } = await getRecipientByEmail(email)

    if (!recipient) {
        throw new Error('Destinatário não encontrado!')
    }

    const response = await api('/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            title,
            recipientId: recipient.id
        })
    })

    if (response.ok) {
        redirect("/admin")

    } else {
        const data = await response.json()

        return { error: data.error }
    }
}

export async function editOrderStatusToPicknUp(orderId: string) {
    const { token } = await getSession()

    const response = await api(`/orders/${orderId}/picknup`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (!response.ok) return

    revalidatePath(`/orders/${orderId}/picknup`)
    redirect('/deliveries/pending')

    return {
        id: orderId
    }
}

export async function editOrderStatusToDone(orderId: string) {
    const { token } = await getSession()

    const response = await api(`/orders/${orderId}/done`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if (!response.ok) return

    revalidatePath(`/orders/${orderId}/done`)
    redirect('/deliveries/done')

    return {
        id: orderId
    }
}

export async function uploadAttachment(prevState: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
    const { token } = await getSession()

    const rawFormData = Object.fromEntries(formData.entries())
    const result = formSchemaUploadAttachment.safeParse(rawFormData)

    if (!result.success) {
        console.error(result.error.issues)
        return { error: result.error.issues }
    }

    const { file, orderId } = result.data

    if (!file) {
        throw new Error('A foto não foi incluída.')
    }

/*     const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes) */

    const response = await api(`orders/${orderId}/attachment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            file
        })
    })

    if (response.ok) {
        redirect("/")

    } else {
        const data = await response.json()

        return { error: data.error }
    }
}