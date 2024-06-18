import { useCallback, useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormRegisterRecipientProps, formSchemaRegisterRecipient } from "@/presenter/validations/register-recipient.validation";

import { registerRecipientAction } from "@/view/ui-logic/actions/register-recipient.action";
import { getAddressByZipcode } from "@/view/ui-logic/utils/get-address-by-zipcode";

type AddressProps = {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
};

export function useRegisterRecipientForm() {
  const [state, handleRegisterRecipient] = useFormState(registerRecipientAction, {
    data: null,
    error: null,
  });

    const {
        register,
        formState: { isSubmitSuccessful, isSubmitting, errors },
        getValues,
        setValue,
        watch,
      } = useForm<FormRegisterRecipientProps>({
        criteriaMode: "all",
        mode: "onBlur",
        resolver: zodResolver(formSchemaRegisterRecipient),
      });
    
      const values =
        getValues();
    
      const zipCode = watch("zipcode");

      const formRef = useRef<HTMLFormElement>(null);
    
      const handleSetData = useCallback(
        (data: AddressProps) => {
          setValue("address.street", data.logradouro);
          setValue("neighborhood", data.bairro);
          setValue("city", data.localidade);
          setValue("state", data.uf);
        },
        [setValue]
      );
    
      const handleFetchAddress = useCallback(
        async (zipcode: number) => {
          const zipCodeTransformed = String(zipcode);
          const { addressFull } = await getAddressByZipcode(zipCodeTransformed);
    
          handleSetData(addressFull);
        },
        [handleSetData]
      );
    
      useEffect(() => {
        setValue("zipcode", zipCode);
        const zipCodeAtt = String(zipCode);
    
        if (zipCodeAtt.length !== 8) return;
        handleFetchAddress(zipCode);
      }, [handleFetchAddress, setValue, zipCode]);
    
      return {
        values,
        register,
        errors,
        isSubmitting,
        formRef,
        handleRegisterRecipient
      }
}