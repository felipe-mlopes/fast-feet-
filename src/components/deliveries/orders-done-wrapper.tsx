import { OrdersProps } from "@/data/types/orders";

import { CardsWrapper } from "./cards-wrapper";
import { getOrdersDone } from "@/data/actions/orders";

interface OrdersDoneWrapperProps {
  city: string;
}

export async function OrdersDoneWrapper({ city }: OrdersDoneWrapperProps) {
  const { ordersDone } = await getOrdersDone(city);

  return (
    <>
      <div className="flex items-center justify-center gap-5 text-ligth-slate-gray">
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
        <p className="text-nowrap">
          {ordersDone.length > 1
            ? `${ordersDone.length} entregas`
            : `${ordersDone.length} entrega`}
        </p>
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:flex-wrap md:gap-6">
        <CardsWrapper orders={ordersDone} />
      </div>
    </>
  );
}
