"use client";

import { useCallback, useEffect, useState } from "react";

import { Order } from "@/models/types/order";
import { getOrdersPending } from "@/models/order/orders";

import { Card } from "./card";

interface OrdersPendingWrapperProps {
  city: string;
  search: string;
}

export function OrdersPendingWrapper({
  city,
  search,
}: OrdersPendingWrapperProps) {
  const [orders, setOrders] = useState<Order[]>([]);

  const deliverymanCity = city && city.toLowerCase();

  const handleFetchOrders = useCallback(async () => {
    const { ordersPending } = await getOrdersPending(deliverymanCity);

    if (!ordersPending) return;

    setOrders(ordersPending);
  }, [deliverymanCity]);

  useEffect(() => {
    handleFetchOrders();
  }, [handleFetchOrders]);

  const ordersFiltered = orders.filter((order) => {
    if (!!search) {
      return order.recipientNeighborhood.includes(search);
    } else {
      return orders;
    }
  });

  return (
    <>
      <div className="flex items-center justify-center gap-5 text-ligth-slate-gray">
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
        <p className="text-nowrap">
          {ordersFiltered.length > 1
            ? `${ordersFiltered.length} entregas`
            : `${ordersFiltered.length} entrega`}
        </p>
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:flex-wrap md:gap-6">
        {ordersFiltered.map((order: Order) => {
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
