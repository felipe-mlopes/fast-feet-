import { z } from "zod";

export const recipientEmailSchema = z.object({
    email: z.string().min(5, 'Digite pelo menos 5 caracteres para a busca.')
})