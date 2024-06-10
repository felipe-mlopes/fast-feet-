import { z } from "zod";

export const setLocationSchema = z.object({
    city: z.string().min(3, 'A cidade deve conter mais de 4 caracteres.')
})