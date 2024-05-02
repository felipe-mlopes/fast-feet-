import Link from "next/link";

import { UploadForm } from "@/components/deliveries/upload-form";

import { ArrowIcon } from "@/components/icons/arrow-icon";
import { RepicIcon } from "@/components/icons/repic-icon";
import { Camera } from "@/components/deliveries/camera";

export default function Upload({ params }: { params: { orderId: string } }) {
  const isUpload = true;

  return (
    <div className="h-screen overflow-hidden bg-gray-light">
      <header className="flex items-center justify-start gap-24 pl-5 pt-14 pb-12 relative bg-indigo-blue">
        <Link href={`/deliveries/pending`}>
          <ArrowIcon side="left" className="fill-white" />
        </Link>
        <h2 className="text-[1.625rem] text-white">Confirmar</h2>
      </header>
      <main className="flex flex-col px-6 h-screen relative">
        <div className="h-[68%]">
          <div className="flex flex-col gap-4 w-[23rem] h-[68%] absolute -top-8 right-1/2 translate-x-1/2 rounded bg-gray-light shadow-card">
            <Camera />
            <div className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-black opacity-40">
              {isUpload ? <UploadForm /> : <RepicIcon />}
            </div>
          </div>
          <p className="px-24 text-center font-normal text-[0.625rem] text-lavender-gray">
            Tire uma foto do pacote com a assinatura do destinatário.
          </p>
        </div>
      </main>
    </div>
  );
}
