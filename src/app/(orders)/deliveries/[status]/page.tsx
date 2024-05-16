import { getSession } from "@/data/actions/auth";
import { logoutAction } from "@/data/actions/login";

import { DeliverymanInfo } from "@/components/order/deliveryman-info";
import { ButtonStatus } from "@/components/deliveries/button-status";

import { ExistIcon } from "@/components/icons/exist-icon";
import { DeliveriesMain } from "@/components/deliveries/deliveries-main";

export default async function Deliveries({
  params,
}: {
  params: { status: "pending" | "done" };
  searchParams: { city: string };
}) {
  const { token } = await getSession();

  const arrayToken = token?.split(".")!;
  const tokenPayload = JSON.parse(atob(arrayToken[1]));

  return (
    <div className="flex flex-col justify-between items-center relative min-h-screen lg:grid lg:grid-col-2 lg:grid-row-3 lg:justify-normal">
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
      <DeliveriesMain />
      <ButtonStatus status={params.status} />
    </div>
  );
}
