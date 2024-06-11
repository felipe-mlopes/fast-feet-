"use client";

import { useGetOrderByTrackingCodeForm } from "@/view/ui-logic/hooks/use-get-order-by-tracking-code-form";

export function TrackInput() {
  const { register, reset, errors, handleOrderByTrackingCodeForm } =
    useGetOrderByTrackingCodeForm();

  return (
    <form
      action={handleOrderByTrackingCodeForm}
      className="flex flex-col md:flex-row items-end gap-6 px-4 py-3 absolute xl:relative -bottom-2 xl:bottom-0 z-50 bg-gray-light rounded shadow-card"
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
