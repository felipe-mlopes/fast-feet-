import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { fetchRecipientEmailsBySearch } from "@/data/actions/recipients";

import { formSchemaCreateOrder } from "@/utils/zod-validations";

type FormCreateOrderProps = z.infer<typeof formSchemaCreateOrder>;
type RecipientProps = {
  email: string
}

export function useFormCreateOrder() {
    const {
        handleSubmit,
        register,
        formState: { isSubmitSuccessful, isSubmitting, errors },
        setValue,
        watch,
      } = useForm<FormCreateOrderProps>({
        criteriaMode: "all",
        mode: "onBlur",
        resolver: zodResolver(formSchemaCreateOrder),
      });

      const [emailsSearched, setEmailsSearched] = useState<RecipientProps[]>([])
    
      const titleWatch = watch('title')
      const emailWatch = watch('email')
    
      const emailSearched = String(emailWatch)
      
      const handleFetchRecipientEmails = useCallback(
        async (search: string) => {
          const { recipients } = await fetchRecipientEmailsBySearch(search)

          if (!recipients) return

          setEmailsSearched(recipients)
        },
        []
      );
   
      useEffect(() => {
        if (emailWatch !== undefined && emailSearched.length > 3) {
          handleFetchRecipientEmails(emailWatch)
        }
      }, [emailWatch,emailSearched, handleFetchRecipientEmails]);
    
      return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setValue,
        titleWatch,
        emailWatch,
        emailsSearched
      }
}