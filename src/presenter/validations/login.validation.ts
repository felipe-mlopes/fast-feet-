import { z } from "zod";

export type FormLoginProps = z.infer<typeof formSchemaLogin>

export const formSchemaLogin = z.object({
    email: z.string().trim().email({ message: "Deve conter o formato de um e-mail válido." }),
    password: z
        .string()
        .trim()
        .min(6, { message: "A senha deve conter no mínimo 6 caracteres." })
})