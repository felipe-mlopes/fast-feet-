import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchemaRegisterRecipient } from "@/utils/zod-validations";
import { getAddressByZipcode } from "@/utils/get-address-by-zipcode";

type FormRegisterRecipientProps = z.infer<typeof formSchemaRegisterRecipient>;
type AddressProps = {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
};

export function useFormRegisterRecipient() {
    const {
        handleSubmit,
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
        handleSubmit,
        values,
        register,
        errors,
        isSubmitting
      }
}