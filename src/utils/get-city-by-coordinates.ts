export async function getCityByCoordinates(latitude: string, longitude: string) {
    const APIkey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY

    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`)

    if (!response.ok) {
        return null
    }

    const data = await response.json()

    const city = data.results[0].components.state

    return {
        city
    }
}