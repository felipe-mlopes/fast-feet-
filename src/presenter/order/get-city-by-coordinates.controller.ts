import { GetCityByCoordinatesModel } from "@/models/order/get-city-by-coordinates.model";

import { getCoordinatesSchema } from "@/presenter/validations/get-coordinates.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface GetCityByCoordinatesControllerResponse {
    data?: string | null
    error?: ValidationError[] | null
}

export class GetCityByCoordinatesController {
    private getCityByCoordinantesModel: GetCityByCoordinatesModel

    constructor() {
        this.getCityByCoordinantesModel = new GetCityByCoordinatesModel()
    }

    async handle(lat: string, lon: string): Promise<GetCityByCoordinatesControllerResponse> {
        const result = getCoordinatesSchema.safeParse({ lat, lon })

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }

        const { latitude, longitude } = result.data

        const coordinates = await this.getCityByCoordinantesModel.execute(latitude, longitude)

        if (coordinates) {
            return { data: coordinates.city, error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Get city failed." }] }
        }
    }
}