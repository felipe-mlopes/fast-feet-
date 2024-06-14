import { useState } from "react";

export function useTrackModal() {
    const [showModalTrack, setShowModalTrack] = useState(false);

    function handleOpenModalTrack() {
        setShowModalTrack(true);
      }
    
      function handleCloseModalTrack() {
        setShowModalTrack(false);
      }

    return {
        showModalTrack,
        handleOpenModalTrack,
        handleCloseModalTrack
    }
}