import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormLoginProps, formSchemaLogin } from "@/presenter/validations/login.validation";
import { useRef, useState } from "react";
import { loginAction } from "@/models/actions/login.action";

export function useLoginForm() {
    const [state, handleLoginForm] = useFormState(loginAction, {
        data: null,
        error: null,
      });

    const { register, formState: { isSubmitting, errors }, watch } = useForm<FormLoginProps>({
        criteriaMode: 'all',
        mode: 'onBlur',
        resolver: zodResolver(formSchemaLogin)
    })

    const emailWatch = watch('email')
    const passwordWatch = watch('password')

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
        register,
        isSubmitting,
        errors,
        emailWatch,
        passwordWatch,
        formRef,
        showPassword,
        toggleShowPassword,
        showModal,
        handleModal,
        state,
        handleLoginForm
    }
}