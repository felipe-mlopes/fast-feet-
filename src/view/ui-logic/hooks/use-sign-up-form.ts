import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSignUpProps, formSchemaSignUp } from "@/presenter/validations/sign-up.validation";

import { cpfMask } from "@/view/ui-logic/utils/cpf-mask";
import { signUpAction } from "@/models/actions/sign-up.action";

export function useSignUpForm() {
    const [state, handleSignUp] = useFormState(signUpAction, {
        data: null,
        error: null,
    });

    const { register, formState: { isSubmitting, errors }, watch, setValue } = useForm<FormSignUpProps>({
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
    
    const formRef = useRef<HTMLFormElement>(null);

    const [showModal, setShowModal] = useState(false);

    function handleModal() {
    setShowModal(!showModal);
    }

    return {
        register,
        isSubmitting,
        errors,
        nameWatch,
        cpfWatch,
        emailWatch,
        passwordWatch,
        confirmPasswordWatch,
        formRef,
        showModal,
        handleModal,
        state,
        handleSignUp
    }
}