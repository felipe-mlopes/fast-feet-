import Image from "next/image";

import { TrackButton } from "./track-button";
import { TrackInput } from "./track-input";

export function Main() {
  return (
    <section
      id="home"
      className="flex justify-between gap-3 md:gap-6 p-8 relative border-b-[1px] border-gray-light md:border-b-0"
    >
      <div className="flex flex-col items-start justify-between gap-8 text-gray-light">
        <div className="space-y-4 lg:mr-32">
          <h2 className="text-4xl">A melhor maneira para enviar seu produto</h2>
          <p className="xl:mr-40">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            veritatis repudiandae facere, exercitationem quasi delectus?
            Consectetur at quisquam, asperiores voluptatibus.
          </p>
        </div>
        <div className="md:flex md:flex-col">
          <TrackButton />
          <span className="hidden md:flex md:absolute md:-bottom-20 md:min-w-[32rem] lg:bottom-2">
            <TrackInput />
          </span>
        </div>
      </div>
      <Image
        src={"/img/deliveryman.jpg"}
        alt="Imagem de um entregador com pacotes nas mãos"
        height={600}
        width={480}
        className="hidden md:block rounded opacity-80 md:w-[480px] md2:h-[360px] lg:w-[640px] lg:h-full xl:w-[720px] xl:h-[480px]"
      />
    </section>
  );
}
