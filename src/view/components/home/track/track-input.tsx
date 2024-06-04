"use client";

import { useRouter } from "next/navigation";
import { FormHTMLAttributes } from "react";

import { useTrackingCode } from "@/view/ui-logic/hooks/use-form-tracking-code";

interface TrackInputProps extends FormHTMLAttributes<HTMLFormElement> {}

export function TrackInput({ ...props }: TrackInputProps) {
  const { register, trackingCodeWatch, handleSubmit, errors } =
    useTrackingCode();

  const router = useRouter();

  function handleRedirectToOrder() {
    router.push(`/order/${trackingCodeWatch}`);
  }

  return (
    <form
      onSubmit={handleSubmit(handleRedirectToOrder)}
      className="flex flex-col md:flex-row items-end gap-6 px-4 py-3 absolute xl:relative -bottom-2 xl:bottom-0 z-50 bg-gray-light rounded shadow-card"
      {...props}
    >
      <div className="flex flex-col md:flex-row gap-3">
        <div>
          <legend className="text-sm text-lavender-gray">
            Código de rastreio
          </legend>
          <input
            type="search"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
            {...register("trackingCode")}
          />
          {errors.trackingCode && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.trackingCode?.message}
            </span>
          )}
        </div>
        <div>
          <legend className="text-sm text-lavender-gray">Cidade</legend>
          <input
            type="text"
            className="flex items-center justify-between py-2 px-3 gap-4 w-40 border rounded outline-none appearance-none bg-white text-lavender-gray"
            {...register("city")}
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="p-4 rounded-lg bg-orange-light font-bold text-lavender-gray"
        >
          Consultar
        </button>
      </div>
    </form>
  );
}
