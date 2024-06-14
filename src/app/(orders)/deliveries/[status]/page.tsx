import { logoutAction } from "@/view/ui-logic/actions/logout.action";
import { useGetToken } from "@/view/ui-logic/hooks/use-get-token";

import { DeliverymanInfo } from "@/view/components/order/deliveryman-info";
import { ButtonStatus } from "@/view/components/deliveries/button-status";

import { ExistIcon } from "@/view/components/icons/exist-icon";
import { DeliveriesMain } from "@/view/components/deliveries/deliveries-main";

export default async function Deliveries({
  params,
}: {
  params: { status: "pending" | "done" };
  searchParams: { city: string };
}) {
  const { token, tokenPayload } = await useGetToken();

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
