import { z } from "zod";

export type TrackFormSchema = z.infer<typeof formSchemaTrackingCode>;

export const formSchemaTrackingCode = z.object({
    trackingCode: z
        .string()
        .min(12, { message: 'O código de rastreio deve conter 12 dígitos.' })
        .max(12, { message: 'O código de rastreio deve conter 12 dígitos.' }),
    city: z.string().optional(),
});