import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TrackFormSchema, formSchemaTrackingCode } from "@/presenter/validations/get-order-by-tracking-code.validation";

import { getOrderByTrackingCodeAction } from "@/view/ui-logic/actions/get-order-by-tracking-code.action";

export function useGetOrderByTrackingCodeForm() {
    const [state, handleOrderByTrackingCodeForm] = useFormState(getOrderByTrackingCodeAction, {
        data: null,
        error: null,
      });

    const { register, watch, reset, formState: { errors } } = useForm<TrackFormSchema>({
        resolver: zodResolver(formSchemaTrackingCode),
      });

    const trackingCodeWatch = watch('trackingCode')

    const router = useRouter();
    
    const handleRedirectToOrder = useCallback(() => {
      router.push(`/order/${trackingCodeWatch}`);
    }, [trackingCodeWatch, router])

    useEffect(() => {
      if (state.data) {
        handleRedirectToOrder();
      }
    }, [state.data, handleRedirectToOrder])

    return {
        register,
        reset,
        errors,
        state,
        handleOrderByTrackingCodeForm
    }
}