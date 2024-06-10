import { z } from "zod";

export const getCoordinatesSchema = z.object({
    latitude: z.string(),
    longitude: z.string()
})