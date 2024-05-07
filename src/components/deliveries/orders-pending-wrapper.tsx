import { getOrdersPending } from "@/data/actions/orders";

import { CardsWrapper } from "./cards-wrapper";

interface OrdersPendingWrapperProps {
  city: string;
}

export async function OrdersPendingWrapper({
  city,
}: OrdersPendingWrapperProps) {
  const { ordersPending } = await getOrdersPending(city);

  return (
    <>
      <div className="flex items-center justify-center gap-5 text-ligth-slate-gray">
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
        <p className="text-nowrap">
          {ordersPending.length > 1
            ? `${ordersPending.length} entregas`
            : `${ordersPending.length} entrega`}
        </p>
        <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-4 md:flex-row md:flex-wrap md:gap-6">
        <CardsWrapper orders={ordersPending} />
      </div>
    </>
  );
}
