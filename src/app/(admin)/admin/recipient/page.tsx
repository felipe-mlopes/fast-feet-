import Image from "next/image";

import { RecipientForm } from "@/view/components/recipient/recipient-form";

export default function Recipient() {
  return (
    <main className="flex justify-center pb-4 lg:justify-around lg:items-start lg:gap-8">
      <Image
        src={"/img/deliveryman2.jpg"}
        alt=""
        width={1000}
        height={1500}
        className="hidden lg:block lg:w-[500px] lg:h-full lg:rounded"
      />
      <div className="space-y-8 max-w-[80%] md:flex md:flex-col md:items-center md:gap-12  md:space-y-0 lg:block lg:max-w-full">
        <h2 className="text-xl text-gray-light">
          Faça o registro de um novo destinatário:
        </h2>
        <RecipientForm />
      </div>
    </main>
  );
}
