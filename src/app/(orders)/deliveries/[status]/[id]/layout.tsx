import { ReactNode } from "react";

export default function DeliveriesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-light">{children}</div>
  );
}
