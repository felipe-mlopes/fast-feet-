"use client";

import { CloseIcon } from "../../icons/close-icon";
import { TrackInput } from "./track-input";

interface TrackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrackModal({ isOpen, onClose }: TrackModalProps) {
  return (
    <div
      role="menu"
      className={`fixed top-0 left-0 w-full h-full bg-purple-dark z-50 lg:hidden ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="mt-12 px-8 h-screen space-y-32">
        <header className="text-end">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </header>
        <main className="flex items-center">
          <TrackInput className="relative p-8 rounded w-full bg-gray-light space-y-8" />
        </main>
      </div>
    </div>
  );
}
