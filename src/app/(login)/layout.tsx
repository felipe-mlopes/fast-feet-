import { ReactNode } from "react";

import { Header } from "@/components/global/header";
import { Cover } from "@/components/global/cover";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-12 pt-4 md:grid md:grid-col-2 md:grid-row-3 md:justify-normal md:max-h-[860px]">
      <Header />
      <Cover />
      {children}
    </div>
  );
}
