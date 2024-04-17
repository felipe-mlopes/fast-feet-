import Image from "next/image";

import { registerRecipient } from "@/data/actions/recipients";

import { Button } from "@/components/global/button";
import { Header } from "@/components/global/header";
import { RecipientForm } from "@/components/recipient/recipient-form";

export default function Recipient() {
  return (
    <div className="p-6 min-h-screen space-y-16">
      <Header />
      <main className="block lg:flex lg:justify-around lg:items-start lg:gap-8">
        <Image
          src={"/img/deliveryman2.jpg"}
          alt=""
          width={1000}
          height={1500}
          className="hidden lg:block lg:w-[500px] lg:h-[720px] lg:rounded"
        />
        <div className="space-y-8 md:space-y-12 md:px-72 lg:px-0">
          <h2 className="text-xl text-gray-light">
            Faça o registro de um novo destinatário:
          </h2>
          <RecipientForm action={registerRecipient}>
            <Button content="Registar o destinatário" type="submit" />
          </RecipientForm>
        </div>
      </main>
    </div>
  );
}
