import Link from "next/link";

import { UploadForm } from "@/components/deliveries/upload-form";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { Button } from "@/components/global/button";

export default function Upload({ params }: { params: { orderId: string } }) {
  return (
    <div className="h-screen overflow-hidden bg-gray-light">
      <header className="flex items-center justify-start gap-24 pl-5 pt-14 pb-12 relative bg-indigo-blue">
        <Link href={`/deliveries/pending`}>
          <ArrowIcon side="left" className="fill-white" />
        </Link>
        <h2 className="text-[1.625rem] text-white">Confirmar</h2>
      </header>
      <main className="flex flex-col px-6 h-screen relative">
        <div className="max-w-[23rem] h-[70%] space-y-6 absolute -top-8 right-1/2 translate-x-1/2 rounded bg-gray-light shadow-card">
          <UploadForm />
          <p className="px-24 text-center font-normal text-[0.625rem] text-lavender-gray">
            Tire uma foto do pacote com a assinatura do destinatário.
          </p>
        </div>
        <div className="max-w-[23rem] w-[50%] absolute bottom-44 right-1/2 translate-x-1/2">
          <Button content="Enviar foto" disabled />
        </div>
      </main>
    </div>
  );
}
