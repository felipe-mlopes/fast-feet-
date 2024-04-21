export function prepareFormData(formData: FormData): any {
    const clientName = formData.get('clientName')
    const clientEmail = formData.get('clientEmail')
    const zipcode = formData.get('zipcode')
    const street = formData.get('address.street')
    const number = formData.get('address.number')
    const complement = formData.get('address.complement') ?? ''
    const neighborhood = formData.get('neighborhood')
    const city = formData.get('city')
    const state = formData.get('state')

    const formatedAddress = `${street}, ${number} ${complement}`
    const address = formatedAddress.trim()

    return {
        clientName,
        clientEmail,
        zipcode,
        address,
        neighborhood,
        city,
        state
    }
}