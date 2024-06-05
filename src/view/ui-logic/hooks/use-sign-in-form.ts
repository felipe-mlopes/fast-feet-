import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signInAction } from "@/models/actions/sign-in.action";

import { FormSignInProps, formSchemaSignIn } from "@/presenter/validations/sign-in.validation";

import { cpfMask } from "@/view/ui-logic/utils/cpf-mask";

export function useSignInForm() {   
    const [state, handleSignIn] = useFormState(
        signInAction, {
            data: null,
            error: null,
    });
    
    const { register, formState: { isSubmitting, errors }, watch, setValue } = useForm<FormSignInProps>({
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

    const formRef = useRef<HTMLFormElement>(null);
        
    const [showPassword, setShowPassword] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(!showModal);
      }
    
    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }

    return {
        formRef,
        register,
        isSubmitting,
        errors,
        cpfWatch,
        passwordWatch,
        handleModal,
        toggleShowPassword,
        showModal,
        showPassword,
        state,
        handleSignIn,
    }
}