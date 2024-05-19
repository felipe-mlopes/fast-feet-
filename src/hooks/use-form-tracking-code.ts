import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { formSchemaTrackingCode } from "@/utils/zod-validations";

type TrackFormSchema = z.infer<typeof formSchemaTrackingCode>;

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