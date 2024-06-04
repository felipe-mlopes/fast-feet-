import { Logo } from "./logo";
import { LogoIcon } from "../icons/logo-icon";

export function Header() {
  return (
    <header className="flex items-end w-full justify-between lg:row-start-1 lg:row-end-1 lg:col-start-1 lg:col-end-2 lg:w-auto lg:justify-start lg:gap-4">
      <LogoIcon />
      <Logo />
    </header>
  );
}
