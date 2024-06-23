'use server'

import { cookies } from "next/headers"

export async function getCityLocationAction() {
    const cookieStore = cookies()

    const location = cookieStore.get('city')

    return {
        location
    }
}