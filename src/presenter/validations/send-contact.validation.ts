import { z } from "zod";

export type ContactFormSchema = z.infer<typeof formSchemaContact>

export const formSchemaContact = z.object({
    name: z.string().trim().min(4, 'Favor informar um nome válido.'),
    email: z
        .string()
        .trim()
        .email({ message: 'Favor informar um e-mail válido.' })
        .toLowerCase(),
    contact: z.enum(['Entregador', 'Destinatário'], {
        errorMap: () => ({ message: 'Selecione uma opção válida.' }),
    }),
    description: z.string().min(10, { message: 'A descrição deve conter pelo menos 10 caracteres.' })
})