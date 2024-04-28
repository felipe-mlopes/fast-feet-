import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { formSchemaLogin } from "@/utils/zod-validations";

type FormLoginProps = z.infer<typeof formSchemaLogin>

export function UseFormLogin() {
    const { handleSubmit, register, formState: { isSubmitting, errors }, watch, setValue } = useForm<FormLoginProps>({
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