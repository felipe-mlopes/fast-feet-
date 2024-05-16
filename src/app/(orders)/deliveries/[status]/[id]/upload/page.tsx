import Link from "next/link";

import { UploadForm } from "@/components/deliveries/upload-form";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { Button } from "@/components/global/button";
import { DeliveryStatusHeader } from "@/components/deliveries/delivery-status-header";

export default function Upload({ params }: { params: { orderId: string } }) {
  return (
    <>
      <DeliveryStatusHeader content="Confirmar">
        <Link href={`/deliveries/pending`}>
          <ArrowIcon side="left" className="fill-white" />
        </Link>
      </DeliveryStatusHeader>
      <main className="flex flex-col px-6 h-screen relative">
        <div className="max-w-[23rem] h-[70%] space-y-6 absolute -top-8 right-1/2 translate-x-1/2 rounded bg-gray-light shadow-card">
          <UploadForm />
          <p className="px-24 text-center font-normal text-[0.625rem] text-lavender-gray">
            Tire uma foto do pacote com a assinatura do destinatário.
          </p>
        </div>
        <div className="max-w-[23rem] w-[50%] absolute bottom-44 right-1/2 translate-x-1/2">
          <Button
            content="Enviar foto"
            disabled
            className="w-full md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
          />
        </div>
      </main>
    </>
  );
}
