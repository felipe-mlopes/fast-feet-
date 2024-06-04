"use client";

import { useParams, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { useSearchInput } from "@/view/ui-logic/hooks/use-search-input";

import SearchInput from "../global/search-input";
import { OrdersPendingWrapper } from "./orders-pending-wrapper";
import { OrdersDoneWrapper } from "./orders-done-wrapper";

export function DeliveriesMain() {
  const { register, searchWatch } = useSearchInput();

  const params = useParams();

  const searchParams = useSearchParams();
  const deliverymanCity = searchParams.get("city");

  return (
    <main className="px-6 pt-[3.25rem] pb-8 w-full min-h-screen bg-gray-light">
      <section className="flex justify-center px-6 w-full absolute top-40 right-1/2 translate-x-1/2 z-10">
        <SearchInput placeholder="Filtrar por bairro" {...register("search")} />
      </section>
      {params.status === "pending" && (
        <Suspense fallback={<div className="animate-spin w-5 h-5" />}>
          <OrdersPendingWrapper city={deliverymanCity!} search={searchWatch} />
        </Suspense>
      )}
      {params.status === "done" && (
        <OrdersDoneWrapper city={deliverymanCity!} search={searchWatch} />
      )}
    </main>
  );
}
