import { useCallback, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormCreateOrderProps, formSchemaCreateOrder } from "@/presenter/validations/create-order.validation";

import { createOrderAction } from "@/view/ui-logic/actions/create-order.action";
import { fetchRecipientEmailsBySearchAction } from "@/view/ui-logic/actions/fetch-recipient-emails-by-search.action";

export function useCreateOrderForm() {
  const [state, handleCreateOrderForm] = useFormState(createOrderAction, {
    data: null,
    error: null,
  });

    const {
        register,
        formState: { isSubmitting, errors },
        setValue,
        watch,
      } = useForm<FormCreateOrderProps>({
        criteriaMode: "all",
        mode: "onBlur",
        resolver: zodResolver(formSchemaCreateOrder),
      });

      const titleWatch = watch('title')
      const emailWatch = watch('email')
      
      const emailSearched = String(emailWatch)

      const [emailsSearched, setEmailsSearched] = useState<string[]>([])
      const [isSelectIconOpen, setIsSelectIconOpen] = useState(false);
      const [showOptions, setShowOptions] = useState(true);
    
      const formRef = useRef<HTMLFormElement>(null);
    
      function handleSelectClick(option: string) {
        setValue("email", option);
        setIsSelectIconOpen(!isSelectIconOpen);
        setShowOptions(!showOptions);
      }

      const handleFetchRecipientEmails = useCallback(
        async (search: string) => {
          const { data, error } = await fetchRecipientEmailsBySearchAction(search)

          if (error) return

          setEmailsSearched(data!)
        },
        []
      );
   
      useEffect(() => {
        if (emailWatch !== undefined && emailSearched.length > 3) {
          handleFetchRecipientEmails(emailWatch)
        }
      }, [emailWatch,emailSearched, handleFetchRecipientEmails]);
    
      return {
        register,
        errors,
        isSubmitting,
        titleWatch,
        emailWatch,
        emailsSearched,
        formRef,
        isSelectIconOpen,
        showOptions,
        handleSelectClick,
        state,
        handleCreateOrderForm
      }
}