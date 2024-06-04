import { z } from "zod";

export const recipientEmailSchema = z.object({
    email: z.string().email()
})