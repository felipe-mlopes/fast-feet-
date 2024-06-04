import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormSchema, formSchemaContact } from "@/presenter/validations/send-contact.validation";

export function useFormContact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormSchema>({
        resolver: zodResolver(formSchemaContact)
    })

    return {
        register,
        handleSubmit,
        reset,
        errors
    }
}