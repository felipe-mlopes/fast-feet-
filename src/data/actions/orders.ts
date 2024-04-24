'use server'

import { redirect } from "next/navigation"

import { api } from "../api"
import { getSession } from "./auth"

import { formSchemaCreateOrder } from "@/utils/zod-validations"
import { FormStateTypes } from "@/types"
import { getRecipientByEmail } from "./recipients"

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
        redirect('/')
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
        redirect("/")

    } else {
        const data = await response.json()

        return { error: data.error }
        }
}