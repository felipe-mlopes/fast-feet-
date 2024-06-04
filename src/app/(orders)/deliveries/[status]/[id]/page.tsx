import Link from "next/link";
import dayjs from "dayjs";

import { getOrderByDetails } from "@/models/order/orders";

import { Order } from "@/models/types/order";

import { statusEdit } from "@/view/ui-logic/utils/transform-status";
import { zipcodeMask } from "@/view/ui-logic/utils/zipcode-mask";

import { DeliveryStatusHeader } from "@/view/components/deliveries/delivery-status-header";
import { PicknUpButton } from "@/view/components/deliveries/picknup-button";
import { Button } from "@/view/components/global/button";

import { ArrowIcon } from "@/view/components/icons/arrow-icon";
import { FolderIcon } from "@/view/components/icons/folder-icon";
import { InfoIcon } from "@/view/components/icons/info-icon";

export default async function DeliveryDetails({
  params,
}: {
  params: { status: string; id: string };
}) {
  const { order } = await getOrderByDetails(params.id);

  const {
    status,
    recipientName,
    recipientZipcode,
    recipientAddress,
    recipientState,
    recipientCity,
    recipientNeighborhood,
    createdAt,
    picknUpAt,
    deliveryAt,
  } = order as Order;

  const transformedStatus = statusEdit(status);
  const transformedZipcode = zipcodeMask(recipientZipcode);
  const createAtOnData = dayjs(createdAt).format("DD/MM/YYYY");
  const picknUpAtOnData = !!picknUpAt
    ? dayjs(picknUpAt).format("DD/MM/YYYY")
    : "--/--/----";
  const deliveryAtOnData = !!deliveryAt
    ? dayjs(deliveryAt).format("DD/MM/YYYY")
    : "--/--/----";

  return (
    <>
      <DeliveryStatusHeader content="Detalhes">
        <Link href={`/deliveries/${params.status}`}>
          <ArrowIcon side="left" className="fill-white" />
        </Link>
      </DeliveryStatusHeader>
      <main className="flex flex-col px-6 min-h-screen relative">
        <div className="flex flex-col justify-center gap-4 w-[23rem] absolute -top-8 right-1/2 translate-x-1/2">
          <section className="px-4 py-6 rounded bg-white">
            <div className="flex items-center gap-3">
              <FolderIcon />
              <h3 className="text-[1.375rem] text-purple-dark">Dados</h3>
            </div>
            <div className="space-y-2 pt-8">
              <strong className="uppercase text-[0.625rem] text-purple-darki">
                Destinatátio
              </strong>
              <p className="text-lavender-gray capitalize">{recipientName}</p>
            </div>
            <div className="space-y-2">
              <strong className="uppercase text-[0.625rem] text-purple-darki">
                Endereço
              </strong>
              <div>
                <p className="text-lavender-gray capitalize">
                  {recipientAddress} - {recipientNeighborhood}
                </p>
                <p className="text-lavender-gray capitalize">
                  {recipientCity}, {recipientState}
                </p>
                <p className="text-lavender-gray">{transformedZipcode}</p>
              </div>
            </div>
          </section>
          <section className="px-4 py-6 rounded bg-white">
            <div className="flex items-center gap-3">
              <InfoIcon />
              <h3 className="text-[1.375rem] text-purple-dark">Situação</h3>
            </div>
            <div className="flex justify-between pt-8">
              <div className="space-y-1.5">
                <div className="space-y-2">
                  <strong className="uppercase text-[0.625rem] text-purple-darki">
                    Status
                  </strong>
                  <p className="m-0 text-lavender-gray capitalize">
                    {transformedStatus}
                  </p>
                </div>
                <div className="space-y-2 pr-8">
                  <strong className="uppercase text-[0.625rem] text-purple-darki">
                    Data de Retirada
                  </strong>
                  <p className="text-lavender-gray">{picknUpAtOnData}</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="space-y-2">
                  <strong className="uppercase text-[0.625rem] text-purple-darki">
                    Postado em
                  </strong>
                  <p className="text-lavender-gray">{createAtOnData}</p>
                </div>
                <div className="space-y-2 pr-8">
                  <strong className="uppercase text-[0.625rem] text-purple-darki">
                    Data de Entrega
                  </strong>
                  <p className="text-lavender-gray">{deliveryAtOnData}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {status === "WAITING" && (
          <PicknUpButton
            className="pt-40"
            buttonContent="Retirar pacote"
            modalContent="Pacote retirado."
            orderId={params.id}
          />
        )}
        {status === "PICKN_UP" && (
          <Link href={`/deliveries/pending/${params.id}/upload`}>
            <Button
              content="Confirmar entrega"
              className="w-[23rem] absolute bottom-80 right-1/2 translate-x-1/2 md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
            />
          </Link>
        )}
      </main>
    </>
  );
}
