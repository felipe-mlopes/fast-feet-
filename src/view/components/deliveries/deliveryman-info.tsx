"use client";

import { useLocation } from "@/view/ui-logic/hooks/use-location";

import { PinIcon } from "@/view/components/icons/pin-icon";

export function DeliverymanInfo({ city }: { city: string }) {
  useLocation();

  return (
    <div className="flex justify-between items-center">
      <h3 className="text-[2rem] text-white">Entregas</h3>
      <div className="flex items-center gap-2">
        <PinIcon />
        <p className="text-lilac-smooth">{city}</p>
      </div>
    </div>
  );
}
