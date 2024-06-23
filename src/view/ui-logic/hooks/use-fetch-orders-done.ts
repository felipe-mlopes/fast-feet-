import { useCallback, useEffect, useState } from "react";

import { Order } from "@/models/types/order";

import { fetchOrdersDoneAction } from "@/view/ui-logic/actions/fetch-orders-done.action";

export function useFetchOrdersDone(city: string, search: string) {
const [orders, setOrders] = useState<Order[]>([]);

  const deliverymanCity = city && city.toLowerCase();

  const handleFetchOrders = useCallback(async () => {
    if (deliverymanCity) {
        const { data, error } = await fetchOrdersDoneAction(deliverymanCity);
    
        if (error) return;

        if (data) {
            setOrders(data);
        }
    }
  }, [deliverymanCity]);

  useEffect(() => {
    handleFetchOrders();
  }, [handleFetchOrders]);

  const ordersDoneFiltered = orders.filter((order) => {
    if (!!search) {
      return order.recipientNeighborhood.includes(search);
    } else {
      return orders;
    }
  });

  return {
    ordersDoneFiltered
  }
}