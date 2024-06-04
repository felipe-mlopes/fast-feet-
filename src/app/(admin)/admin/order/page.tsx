import Image from "next/image";

import { OrderForm } from "@/view/components/order/order-form";

export default function Order() {
  return (
    <main className="flex justify-center pt-16 pb-4 w-full md:w-auto lg:justify-around lg:items-start lg:gap-8">
      <Image
        src={"/img/deliveryman2.jpg"}
        alt=""
        width={1000}
        height={1500}
        className="hidden lg:block lg:w-[500px] lg:h-full lg:rounded"
      />
      <div className="space-y-8 md:flex md:flex-col md:items-center md:gap-12  md:space-y-0 lg:block lg:max-w-full">
        <h2 className="text-xl text-gray-light">Crie um novo pedido:</h2>
        <OrderForm />
      </div>
    </main>
  );
}
