import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { searchInputSchema } from "@/utils/zod-validations";

type SearchInputSchema = z.infer<typeof searchInputSchema>;

export function UseSearchInput() {
    const { register, watch } = useForm<SearchInputSchema>({
        criteriaMode: 'all',
        mode: 'onChange',
        resolver: zodResolver(searchInputSchema),
      });

    const searchWatch = watch('search')

    return {
        register,
        searchWatch,
    }
}