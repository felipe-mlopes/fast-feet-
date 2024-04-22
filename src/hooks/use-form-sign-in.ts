import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { formSchemaSignIn } from "@/utils/zod-validations";
import { cpfMask } from "@/utils/cpf-mask";

type FormSignInProps = z.infer<typeof formSchemaSignIn>

export function UseFormSignIn() {
    const { handleSubmit, register, formState: { isSubmitting, errors }, watch, setValue } = useForm<FormSignInProps>({
        criteriaMode: 'all',
        mode: 'onBlur',
        resolver: zodResolver(formSchemaSignIn)
    })

    const cpfWatch = watch('cpf')
    const passwordWatch = watch('password')

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
        cpfWatch,
        passwordWatch,
    }
}