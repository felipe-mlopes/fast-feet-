"use client";

import Link from "next/link";

import { Logo } from "../global/logo";

import { LogoIcon } from "../icons/logo-icon";
import { CloseIcon } from "../icons/close-icon";
import { MenuMain } from "./menu-main";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuModal({ isOpen, onClose }: MenuProps) {
  return (
    <div
      role="menu"
      className={`fixed top-0 left-0 w-full h-full bg-purple-dark z-50 lg:hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="mt-12 px-8 space-y-16">
        <header className="flex items-end justify-between">
          <span className="flex items-end gap-2">
            <LogoIcon />
            <Logo />
          </span>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </header>
        <main>
          <MenuMain onClose={onClose} />
        </main>
        <footer className="pt-4 space-y-6 border-t-[1px] border-gray-light">
          <strong className="text-gray-light">Área do Entregador</strong>
          <div className="flex gap-4 items-center justify-center">
            <Link
              href={"/signin"}
              className="flex items-center justify-center py-2 px-4 rounded bg-gray-light text-indigo-blue"
            >
              Sign In
            </Link>
            <span className="text-gray-light">|</span>
            <Link
              href={"/signup"}
              className="flex items-center justify-center py-2 px-4 rounded bg-gray-light text-indigo-blue"
            >
              Sign Up
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
