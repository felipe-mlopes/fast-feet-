'use server'

import { GetCityByCoordinatesController } from "@/presenter/order/get-city-by-coordinates.controller"

export async function getCityByCoordinatesAction(latitude: string, longitude: string) {
    const getCityByCoordinatesController = new GetCityByCoordinatesController()

    const { data, error } = await getCityByCoordinatesController.handle(latitude, longitude)

    return {
        data,
        error
    }
}