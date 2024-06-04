import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormLoginProps, formSchemaLogin } from "@/presenter/validations/login.validation";

export function useFormLogin() {
    const { handleSubmit, register, formState: { isSubmitting, errors }, watch } = useForm<FormLoginProps>({
        criteriaMode: 'all',
        mode: 'onBlur',
        resolver: zodResolver(formSchemaLogin)
    })

    const emailWatch = watch('email')
    const passwordWatch = watch('password')

    return {
        handleSubmit,
        register,
        isSubmitting,
        errors,
        emailWatch,
        passwordWatch,
    }
}