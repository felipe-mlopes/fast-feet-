import { UploadAttachmentModel } from "@/models/order/upload-attachment.model";

import { formSchemaUploadAttachment } from "@/presenter/validations/upload-attachment.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface UploadAttachmentControllerResponse {
    data?: string | null
    error?: ValidationError[] | null
}

export class UploadAttachmentController {
    private uploadAttachmentModel: UploadAttachmentModel

    constructor() {
        this.uploadAttachmentModel = new UploadAttachmentModel()
    }

    async handle(formData: FormData): Promise<UploadAttachmentControllerResponse> {
        const rawFormData = Object.fromEntries(formData.entries())
        const result = formSchemaUploadAttachment.safeParse(rawFormData)

        if (!result.success) {
            console.error(result.error.issues)
            return { error: result.error.issues }
        }
    
        const { file, orderId } = result.data

        const isUploaded = await this.uploadAttachmentModel.execute(file, orderId)

        if (isUploaded) {
            return { data: 'Upload has been successfully', error: null }
        } else {
            return { data: null, error: [{ path: [], message: "Upload failed." }] };
        }
    }
}