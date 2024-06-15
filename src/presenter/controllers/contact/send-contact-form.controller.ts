import { Email } from "@/presenter/adpaters/mailing/send-mail.adapter";
import { formSchemaContact } from "@/presenter/validations/send-contact.validation";

import { ValidationError } from "@/view/ui-logic/types/form-state";

interface SendContactFormControllerResponse {
    data?: Email | null
    error?: ValidationError[] | null
}

export class SendContactFormController {
  async handle(formData: FormData): Promise<SendContactFormControllerResponse> {
    const rawFormData = Object.fromEntries(formData.entries());
    const result = formSchemaContact.safeParse(rawFormData);
    
    if (!result.success) {
      return { data: null, error: result.error.issues };
    }
    
    return {
      data: result.data, error: null
    }
  }
}