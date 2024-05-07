"use client";

import { UseSearchInput } from "@/hooks/use-search-input";

import { Card } from "./card";

import { OrdersProps } from "@/data/types/orders";

interface CardsWrapperProps {
  orders: OrdersProps[];
}

export function CardsWrapper({ orders }: CardsWrapperProps) {
  const { searchWatch } = UseSearchInput();

  const ordersFiltered = orders.filter((order) => {
    if (!!searchWatch) {
      return order.recipientNeighborhood.includes(searchWatch);
    } else {
      return orders;
    }
  });

  return (
    <>
      {ordersFiltered.map((order: OrdersProps) => {
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
    </>
  );
}
