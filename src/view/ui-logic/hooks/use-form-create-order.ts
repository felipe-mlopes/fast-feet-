import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { fetchRecipientEmailsBySearch } from "@/models/recipient/recipients";
import { RecipientEmail } from "@/models/types/recipient-email";

import { FormCreateOrderProps, formSchemaCreateOrder } from "@/presenter/validations/create-order.validation";

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

      const [emailsSearched, setEmailsSearched] = useState<RecipientEmail[]>([])
    
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