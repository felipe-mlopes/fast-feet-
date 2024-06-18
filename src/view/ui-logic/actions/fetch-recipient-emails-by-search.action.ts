'use server'

import { FetchRecipientEmailsBySearchController } from "@/presenter/controllers/recipient/fetch-recipient-emails-by-search.controller"

export async function fetchRecipientEmailsBySearchAction(search: string) {
    const fetchRecipientEmailsBySearchController = new FetchRecipientEmailsBySearchController()

    const { data, error } = await fetchRecipientEmailsBySearchController.handle(search)
    
    return {
        data,
        error
    }
}