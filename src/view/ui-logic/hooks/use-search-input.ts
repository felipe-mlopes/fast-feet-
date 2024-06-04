import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SearchInputSchema, searchInputSchema } from "@/presenter/validations/search-input.validation";

export function useSearchInput() {
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