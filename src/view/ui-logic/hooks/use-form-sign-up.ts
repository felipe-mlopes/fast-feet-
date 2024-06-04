import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSignUpProps, formSchemaSignUp } from "@/presenter/validations/sign-up.validation";

import { cpfMask } from "@/view/ui-logic/utils/cpf-mask";

export function useFormSignUp() {
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