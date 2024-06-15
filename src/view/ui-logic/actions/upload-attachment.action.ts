'use server'

import { UploadAttachmentController} from "@/presenter/controllers/order/upload-attachment.controller"

import { FormStateTypes } from "@/view/ui-logic/types/form-state"

export async function uploadAttachment(_: FormStateTypes, formData: FormData): Promise<FormStateTypes> {
	const uploadAttachmentController = new UploadAttachmentController()
	
	const { data, error } = await uploadAttachmentController.handle(formData)
	
	return {
		data,
		error
	}
}