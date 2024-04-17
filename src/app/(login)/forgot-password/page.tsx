import Link from "next/link";

import { LongArrowIcon } from "@/components/icons/long-arrow-icon";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col justify-between items-center mt-6 gap-10 lg:mt-40">
      <main className="flex flex-col gap-16 lg:flex-row lg:justify-center lg:items-center lg:w-full">
        <div className="flex flex-col gap-6">
          <h2 className="flex flex-col text-5xl font-bold text-white italic">
            <span className="text-orange-light">Esqueceu</span>
            <span>sua senha?</span>
          </h2>
          <p className="text-base font-normal text-lilac-smooth mr-[8.5rem] md:mr-0">
            Por motivos de segurança, para recurá-la, vá até a central da
            distribuidora Fastfeet.
          </p>
        </div>
        <div>
          <strong className="text-xs text-white  uppercase">endereço</strong>
          <p className="text-lilac-smooth">Rua Guilherme Gemballa, 260</p>
          <p className="text-lilac-smooth">Jardim América, SC</p>
          <p className="text-lilac-smooth">89 168-000</p>
        </div>
      </main>
      <footer className="flex justify-between items-center w-full pt-24 lg:justify-center lg:items-center lg:gap-16">
        <Link href={"/login"}>
          <LongArrowIcon />
        </Link>
        <Link href={"/login"} className="font-medium text-white">
          Voltar para o login
        </Link>
      </footer>
    </div>
  );
}
