"use client";

import Link from "next/link";

import { HomeIcon } from "../../icons/home-icon";
import { DeliveryIcon } from "../../icons/delivery-icon";
import { ProfileIcon } from "../../icons/profile-icon";
import { IdIcon } from "../../icons/id-icon";

interface MenuMainProps {
  onClose: () => void;
}

export function MenuMain({ onClose }: MenuMainProps) {
  return (
    <ul className="space-y-6 text-gray-light text-xl lg:flex lg:items-center lg:space-y-0 lg:gap-8 lg:text-sm">
      <li>
        <Link
          href="#home"
          onClick={onClose}
          className="flex items-center gap-2 lg:items-end lg:gap-1 lg:hover:text-orange-light lg:hover:stroke-orange-light"
        >
          <HomeIcon />
          <strong>Home</strong>
        </Link>
      </li>
      <li>
        <Link
          href="#solutions"
          onClick={onClose}
          className="flex items-center gap-2 lg:items-end lg:gap-1 lg:hover:text-orange-light lg:hover:stroke-orange-light"
        >
          <DeliveryIcon />
          <strong>Soluções</strong>
        </Link>
      </li>
      <li>
        <Link
          href="#contact"
          onClick={onClose}
          className="flex items-center gap-2 lg:items-end lg:gap-1 lg:hover:text-orange-light lg:hover:stroke-orange-light"
        >
          <ProfileIcon color="#F7F5FA" />
          <strong>Contato</strong>
        </Link>
      </li>
      <li className="flex gap-2">
        <Link
          href={"/login"}
          className="flex items-center gap-2 lg:items-end lg:gap-1 md:hover:text-orange-light md:hover:stroke-orange-light"
        >
          <IdIcon color="#F7F5FA" />
          <strong>Painel Admin</strong>
        </Link>
      </li>
    </ul>
  );
}
