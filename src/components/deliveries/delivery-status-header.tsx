import { ReactNode } from "react";

interface DeliveryStatusHeaderProps {
  content: string;
  children: ReactNode;
}

export function DeliveryStatusHeader({
  content,
  children,
}: DeliveryStatusHeaderProps) {
  return (
    <header className="flex items-center justify-center pl-5 pt-12 pb-20 relative bg-indigo-blue">
      <div className="flex items-center justify-between w-[23rem]">
        {children}
        <h2 className="text-center text-[1.625rem] text-white">{content}</h2>
        <span />
      </div>
    </header>
  );
}
