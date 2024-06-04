import { Logo } from "@/view/components/global/logo";
import { Menu } from "@/view/components/home/menu/menu";
import { Main } from "@/view/components/home/main";
import { Solutions } from "@/view/components/home/solutions";

import { LogoIcon } from "@/view/components/icons/logo-icon";
import { Contacts } from "@/view/components/home/contacts";
import { Banner } from "@/view/components/home/banner";

export default function Home() {
  return (
    <div>
      <header className="flex items-end justify-between sticky top-0 z-[2] md:static px-8 py-8 w-full bg-indigo-blue border-b-[1px] border-gray-light lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-2 lg:w-auto lg:gap-4">
        <span className="flex items-end gap-2">
          <LogoIcon />
          <Logo />
        </span>
        <Menu />
      </header>
      <main className="md:space-y-12">
        <Main />
        <Solutions />
        <Banner />
        <Contacts />
      </main>
      <footer className="flex flex-col gap-4 py-5 text-center text-sm text-gray-light">
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
