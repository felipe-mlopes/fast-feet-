import { api } from "../api"

interface GetCityByCoordinatesResponse {
    city: string | null
}

interface IGetCityByCoordinatesModel {
    execute(latitude: string, longitude: string): Promise<GetCityByCoordinatesResponse>
}

export class GetCityByCoordinatesModel implements IGetCityByCoordinatesModel {
    async execute(latitude: string, longitude: string): Promise<GetCityByCoordinatesResponse> {
        const APIkey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY

        const response = await api(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        if (response.ok) {
            const data = await response.json()

            return {
                city: data.results[0].components.state
            }
        }

        return {
            city: null
        }
    }
}