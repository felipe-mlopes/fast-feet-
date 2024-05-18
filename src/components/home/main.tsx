import Image from "next/image";
import Link from "next/link";

import { TrackInput } from "./track-input";

export function Main() {
  return (
    <section
      id="home"
      className="flex justify-between gap-3 relative border-t-[1px] border-gray-light pt-4 md:border-0"
    >
      <div className="flex flex-col items-start gap-8 text-gray-light">
        <div className="space-y-4">
          <h2 className="text-4xl">A melhor maneira para enviar seu produto</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            veritatis repudiandae facere, exercitationem quasi delectus?
            Consectetur at quisquam, asperiores voluptatibus.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="px-3 py-2 bg-orange-light rounded font-bold text-lavender-gray">
            Consulte o status do seu pedido aqui
          </div>
          <TrackInput />
        </div>
      </div>
      <Image
        src={"/img/deliveryman.jpg"}
        alt=""
        height={600}
        width={500}
        className="rounded opacity-80"
      />
      <Link href="#"></Link>
    </section>
  );
}
