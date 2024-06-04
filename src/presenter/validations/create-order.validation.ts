import { z } from "zod";

export type FormCreateOrderProps = z.infer<typeof formSchemaCreateOrder>;

export const formSchemaCreateOrder = z.object({
    title: z.string().trim().min(4, 'O título deve conter pelo menos 4 dígitos.'),
    email: z.string().email({ message: 'Favor informar um e-mail válido.' })
})