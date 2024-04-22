import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { formSchemaSignUp } from "@/utils/zod-validations";
import { cpfMask } from "@/utils/cpf-mask";

type FormSignUpProps = z.infer<typeof formSchemaSignUp>

export function UseFormSignUp() {
    const { handleSubmit, register, formState: { isSubmitting, errors }, watch, setValue } = useForm<FormSignUpProps>({
        criteriaMode: 'all',
        mode: 'onBlur',
        resolver: zodResolver(formSchemaSignUp)
    })

    const nameWatch = watch('name')
    const cpfWatch = watch('cpf')
    const emailWatch = watch('email')
    const passwordWatch = watch('password')
    const confirmPasswordWatch = watch('confirmPassword')

    useEffect(() => {
        if (cpfWatch !== undefined) {
            setValue('cpf', cpfMask(cpfWatch))
        }
    }, [cpfWatch, setValue])

    return {
        handleSubmit,
        register,
        isSubmitting,
        errors,
        nameWatch,
        cpfWatch,
        emailWatch,
        passwordWatch,
        confirmPasswordWatch
    }
}