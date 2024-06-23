"use client";

import { Order } from "@/models/types/order";

import { useFetchOrdersPending } from "@/view/ui-logic/hooks/use-fetch-orders-pending";

import { Card } from "./card";

interface OrdersPendingWrapperProps {
  city: string;
  search: string;
}

export function OrdersPendingWrapper({
  city,
  search,
}: OrdersPendingWrapperProps) {
  const { ordersPendingFiltered } = useFetchOrdersPending(city, search);

  return (
    <>
      <div className="flex items-center justify-center gap-5 text-ligth-slate-gray">
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
        <p className="text-nowrap">
          {ordersPendingFiltered.length > 1
            ? `${ordersPendingFiltered.length} entregas`
            : `${ordersPendingFiltered.length} entrega`}
        </p>
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:flex-wrap md:gap-6">
        {ordersPendingFiltered.map((order: Order) => {
          return (
            <Card
              key={order.id}
              id={order.id}
              title={order.title}
              createdAt={order.createdAt}
              status={order.status}
              recipientZipcode={order.recipientZipcode}
              recipientCity={order.recipientCity}
              recipientNeighborhood={order.recipientNeighborhood}
            />
          );
        })}
      </div>
    </>
  );
}
