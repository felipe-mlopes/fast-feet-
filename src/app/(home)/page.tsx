import Image from "next/image";
import Link from "next/link";

import { Logo } from "@/components/global/logo";
import { Track } from "@/components/home/track";

import { LogoIcon } from "@/components/icons/logo-icon";
import { Menu } from "@/components/home/menu";

export default function Home() {
  return (
    <div className="space-y-8 px-8">
      <header className="flex items-end justify-between w-full lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-2 lg:w-auto lg:gap-4">
        <span className="flex items-end gap-2">
          <LogoIcon />
          <Logo />
        </span>
        <Menu />
      </header>
      <main className="space-y-4">
        <Track />
        <section
          id="home"
          className="border-t-[1px] border-gray-light pt-4 md:border-0"
        >
          <Link href="#" className="relative">
            <Image
              src={"/img/deliveryman.jpg"}
              alt=""
              height={600}
              width={600}
              className="opacity-80"
            />
            <div className="absolute bottom-2 right-4 space-y-3">
              <div className="space-y-2 text-center">
                <h2 className="bg-orange-light text-gray-light p-1">
                  Venha se tornar
                </h2>
                <h2 className="bg-orange-light text-gray-light p-1">
                  nosso entregador
                </h2>
              </div>
              <div className="bg-gray-light rounded-lg text-center font-bold">
                Cadastre-se
              </div>
            </div>
          </Link>
        </section>
        <section
          id="solutions"
          className="space-y-2 border-t-[1px] border-gray-light pt-4 md:border-0"
        >
          <h2 className="text-lg text-gray-light">
            Por que ser um parceiro da Fast Feet?
          </h2>
          <strong className="text-gray-light">
            Tenha a liberdade de entregar quando quiser e aumentar seus ganhos
          </strong>
          <div className="space-y-4 text-gray-light">
            <div>
              <i></i>
              <div>
                <strong>Complemente a sua renda</strong>
                <p>Escolha suas entregas e receba os repasses semanalmente.</p>
              </div>
            </div>
            <div>
              <i></i>
              <div>
                <strong>Horários flexíveis</strong>
                <p>
                  Aceite apenas os pedidos que quiser, sem penalidades. Faça seu
                  horário!
                </p>
              </div>
            </div>
            <div>
              <i></i>
              <div>
                <strong>Ativação online</strong>
                <p>
                  Torne-se um motorista parceiro participando do processo de
                  ativação de onde você estiver.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact"></section>
      </main>
      <footer className="flex flex-col gap-4 border-t-[1px] border-gray-light md:border-0 pt-5 text-center text-sm text-gray-light">
        <div className="md:flex md:justify-center md:gap-2 w-full">
          <p>© 2024 FastFeet</p>
          <span className="md:before:content-['|']" />
          <p>Todos os direitos reservados.</p>
        </div>
        <div className="md:flex md:justify-center md:gap-2 w-full">
          <p>Av. Central, 1000 - Centro - Rio de Janeiro/RJ</p>
          <span className="md:before:content-['|']" />
          <p>CEP: 21000-000 | Tel. 4004-1020</p>
          <span className="md:before:content-['|']" />
          <p>CNPJ: 99.999.999/0001-00</p>
        </div>
      </footer>
    </div>
  );
}
