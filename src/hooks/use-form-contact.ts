import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchemaContact } from "@/utils/zod-validations";
import { zodResolver } from "@hookform/resolvers/zod";

type ContactFormSchema = z.infer<typeof formSchemaContact>

export function useFormContact() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormSchema>({
        resolver: zodResolver(formSchemaContact)
    })

    return {
        register,
        handleSubmit,
        errors
    }
}