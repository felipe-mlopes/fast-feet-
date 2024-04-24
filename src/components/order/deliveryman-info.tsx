"use client";

import { PinIcon } from "@/components/icons/pin-icon";
import { useLocation } from "@/hooks/use-location";

export function DeliverymanInfo() {
  const { location } = useLocation();

  return (
    <div className="flex justify-between items-center">
      <h3 className="text-[2rem] text-white">Entregas</h3>
      <div className="flex items-center gap-2">
        <PinIcon />
        <p className="text-lilac-smooth">{location}</p>
      </div>
    </div>
  );
}
