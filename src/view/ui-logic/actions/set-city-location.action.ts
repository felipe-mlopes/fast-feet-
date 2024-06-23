'use server'

import { cookies } from "next/headers"

import { getCityByCoordinatesAction } from "./get-city-by-coordinates.action";

export async function setCityLocationAction(latitude: string, longitude: string) {
    const cookieStore = cookies()

    const coordinates = await getCityByCoordinatesAction(latitude, longitude);

    if (coordinates.data) {
        cookieStore.set('city', coordinates.data)
    }
}

