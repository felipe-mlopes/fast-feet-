import { useForm } from "react-hook-form";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormSchema, formSchemaContact } from "@/presenter/validations/send-contact.validation";

export function useContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormSchema>({
        resolver: zodResolver(formSchemaContact)
    })

    const formRef = useRef<HTMLFormElement>(null);

    return {
        register,
        handleSubmit,
        reset,
        errors,
        formRef
    }
}