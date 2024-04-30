import { getSession } from "@/data/actions/auth";
import { getOrdersDone, getOrdersPending } from "@/data/actions/orders";
import { logoutAction } from "@/data/actions/login";

import { OrdersProps } from "@/data/types/orders";

import { DeliverymanInfo } from "@/components/order/deliveryman-info";
import { Card } from "@/components/deliveries/card";
import { ButtonStatus } from "@/components/deliveries/button-status";
import { SearchInput } from "@/components/global/search-input";

import { ExistIcon } from "@/components/icons/exist-icon";

export default async function Deliveries({
  params,
  searchParams,
}: {
  params: { status: "pending" | "done" };
  searchParams: { city: string };
}) {
  const { token } = await getSession();

  const arrayToken = token?.split(".")!;
  const tokenPayload = JSON.parse(atob(arrayToken[1]));

  const deliverymanCity = !searchParams.city
    ? ""
    : searchParams.city.toLowerCase();

  const { ordersPending } = await getOrdersPending(deliverymanCity);
  const { ordersDone } = await getOrdersDone(deliverymanCity);

  return (
    <div className="flex flex-col justify-between items-center mt-20 relative min-h-screen lg:grid lg:grid-col-2 lg:grid-row-3 lg:justify-normal">
      <header className="space-y-8 w-full px-6 pb-16">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-lilac-smooth">
            <p>Bem vindo,</p>
            <p className="capitalize">{token ? tokenPayload.name : ""}</p>
          </div>
          <form action={logoutAction}>
            <button type="submit">
              <ExistIcon />
            </button>
          </form>
        </div>
        <DeliverymanInfo />
      </header>
      <section className="flex justify-center px-6 w-full absolute top-40 z-10">
        <SearchInput placeholder="Filtrar por bairro" />
      </section>
      <main className="px-6 pt-[3.25rem] pb-8 w-full min-h-screen bg-gray-light">
        {params.status === "pending" && (
          <>
            <div className="flex items-center gap-5 text-ligth-slate-gray">
              <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
              <p className="text-nowrap">
                {ordersPending.length > 1
                  ? `${ordersPending.length} entregas`
                  : `${ordersPending.length} entrega`}
              </p>
              <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
            </div>
            <div className="space-y-4 pt-4">
              {ordersPending.map((order: OrdersProps) => {
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
        )}
        {params.status === "done" && (
          <>
            <div className="flex items-center gap-5 text-ligth-slate-gray">
              <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
              <p className="text-nowrap">
                {ordersDone.length > 1
                  ? `${ordersDone.length} entregas`
                  : `${ordersDone.length} entrega`}
              </p>
              <span className="content=[''] w-1/3 h-[1px] bg-bluish-gray" />
            </div>
            <div className="space-y-4 pt-4">
              {ordersDone.map((order: OrdersProps) => {
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
        )}
      </main>
      <ButtonStatus status={params.status} />
    </div>
  );
}
