import { z } from "zod";

export type SearchInputSchema = z.infer<typeof searchInputSchema>;

export const searchInputSchema = z.object({
    search: z.string()
})