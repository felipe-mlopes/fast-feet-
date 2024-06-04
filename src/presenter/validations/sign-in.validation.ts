import { z } from "zod";

export const formSchemaSignIn = z.object({
    cpf: z
        .string()
        .trim()
        .refine((val) => val.length === 14, { message: "CPF inválido" })
        .refine((val) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(val), { message: "CPF inválido" }),
    password: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })
})

export type FormSignInProps = z.infer<typeof formSchemaSignIn>