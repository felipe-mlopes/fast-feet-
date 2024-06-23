"use client";

import { useSearchInput } from "@/view/ui-logic/hooks/use-search-input";

import SearchInput from "@/view/components/global/search-input";
import { OrdersPendingWrapper } from "./orders-pending-wrapper";
import { OrdersDoneWrapper } from "./orders-done-wrapper";

export function DeliveriesMain({ city }: { city: string }) {
  const { register, searchWatch, params } = useSearchInput();

  return (
    <main className="px-6 pt-[3.25rem] pb-8 w-full min-h-screen bg-gray-light">
      <section className="flex justify-center px-6 w-full absolute top-40 right-1/2 translate-x-1/2 z-10">
        <SearchInput placeholder="Filtrar por bairro" {...register("search")} />
      </section>
      {params.status === "pending" && (
        <OrdersPendingWrapper city={city} search={searchWatch} />
      )}
      {params.status === "done" && (
        <OrdersDoneWrapper city={city} search={searchWatch} />
      )}
    </main>
  );
}
