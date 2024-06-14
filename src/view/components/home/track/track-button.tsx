"use client";

import { useTrackModal } from "@/view/ui-logic/hooks/use-track-modal";
import { useWindowSize } from "@/view/ui-logic/hooks/use-window-size";

import { TrackModal } from "./track-modal";

export function TrackButton() {
  const { showModalTrack, handleOpenModalTrack, handleCloseModalTrack } =
    useTrackModal();

  const { width } = useWindowSize();

  return (
    <div className="relative md:absolute md:bottom-2 md:z-50 lg:bottom-24 xl:relative">
      <button
        disabled={width > 768}
        onClick={handleOpenModalTrack}
        className="px-3 py-2 bg-orange-light rounded font-bold text-lavender-gray"
      >
        Consulte o status do seu pedido aqui
      </button>
      <TrackModal isOpen={showModalTrack} onClose={handleCloseModalTrack} />
    </div>
  );
}
