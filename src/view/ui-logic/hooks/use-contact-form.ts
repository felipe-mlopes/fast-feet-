import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormSchema, formSchemaContact } from "@/presenter/validations/send-contact.validation";

import { sendContactAction } from "@/view/ui-logic/actions/send-contact.action";
import { SendEmailAdapter } from "@/presenter/adpaters/mailing/send-mail.adapter";

export function useContactForm() {
    const sendEmailAdapter = new SendEmailAdapter()

    const [state, handleSendContactForm] = useFormState(sendContactAction, {
	    data: null,
	    error: null,
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormSchema>({
        resolver: zodResolver(formSchemaContact)
    })

    const formRef = useRef<HTMLFormElement>(null);

    if (state.data) {
        sendEmailAdapter.sendEmail(state.data)
    }

    return {
        register,
        handleSubmit,
        reset,
        errors,
        formRef,
        state,
        handleSendContactForm
    }
}