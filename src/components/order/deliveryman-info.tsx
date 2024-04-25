"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useLocation } from "@/hooks/use-location";

import { PinIcon } from "@/components/icons/pin-icon";

export function DeliverymanInfo() {
  const { location } = useLocation();
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (location) {
      router.push(`${path}?city=${location}`);
    }
  }, [location, router, path]);

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
