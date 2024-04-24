import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchemaCreateOrder } from "@/utils/zod-validations";
import { fetchRecipientEmailsBySearch } from "@/data/actions/recipients";

type FormCreateOrderProps = z.infer<typeof formSchemaCreateOrder>;
type RecipientProps = {
  email: string
}

export function useFormCreateOrder() {
    const {
        handleSubmit,
        register,
        formState: { isSubmitSuccessful, isSubmitting, errors },
        watch,
      } = useForm<FormCreateOrderProps>({
        criteriaMode: "all",
        mode: "onBlur",
        resolver: zodResolver(formSchemaCreateOrder),
      });

      // const [emailsSearched, setEmailsSearched] = useState<RecipientProps[]>([])
    
      const titleWatch = watch('title')
      const emailWatch = watch('email')
    
      const emailSearched = String(emailWatch)
    
/*       const handleSetData = useCallback(
        (data: RecipientProps) => {
          setEmailsSearched(data)
        },
        []
      ); */
    
       const handleFetchRecipientEmails = useCallback(
        async (search: string) => {
          const { recipients } = await fetchRecipientEmailsBySearch(search)

          console.log(recipients)
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
        titleWatch,
        emailWatch
      }
}