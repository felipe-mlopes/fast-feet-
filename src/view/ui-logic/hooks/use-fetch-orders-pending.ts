import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Order } from "@/models/types/order";

import { fetchOrdersPendingAction } from "@/view/ui-logic/actions/fetch-orders-pending.action";

export function useFetchOrdersPending(search: string) {
const [orders, setOrders] = useState<Order[]>([]);

  const searchParams = useSearchParams();
  const city = searchParams.get("city");

  const deliverymanCity = city && city.toLowerCase();

  const handleFetchOrders = useCallback(async () => {
    if (deliverymanCity) {
        const { data, error } = await fetchOrdersPendingAction(deliverymanCity);
    
        if (error) return;

        if (data) {
            setOrders(data);
        }
    }
  }, [deliverymanCity]);

  useEffect(() => {
    handleFetchOrders();
  }, [handleFetchOrders]);

  const ordersPendingFiltered = orders.filter((order) => {
    if (!!search) {
      return order.recipientNeighborhood.includes(search);
    } else {
      return orders;
    }
  });

  return {
    ordersPendingFiltered
  }
}