import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { TrackFormSchema, formSchemaTrackingCode } from "@/presenter/validations/get-order-by-tracking-code.validation";

export function useTrackingCode() {
    const { register, watch, handleSubmit, formState: { errors } } = useForm<TrackFormSchema>({
        resolver: zodResolver(formSchemaTrackingCode),
      });

    const trackingCodeWatch = watch('trackingCode')

    return {
        register,
        trackingCodeWatch,
        handleSubmit,
        errors
    }
}