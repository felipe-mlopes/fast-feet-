import { z } from "zod";

export type FormSignUpProps = z.infer<typeof formSchemaSignUp>

export const formSchemaSignUp = z.object({
    name: z.string().trim(),
    email: z.string().trim().email({ message: "Deve conter o formato de um e-mail válido." }),
    cpf: z
        .string()
        .trim()
        .refine((val) => val.length === 14, { message: "CPF inválido" })
        .refine((val) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(val), { message: "CPF inválido" }),
    password: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." }),
    confirmPassword: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })    
}).refine(({ password,  confirmPassword}) => password === confirmPassword, {
    message: "As senhas precisam ser iguais.",
    path: ["confirmPassword"]
})