import { z } from "zod";

export const setIdSchema = z.object({
    orderId: z.string().uuid()
})