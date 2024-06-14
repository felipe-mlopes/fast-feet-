import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function useCamera() {
const [mediaStream, setMediaStream] = useState<MediaStream | null>();
const path = usePathname()

  const handleMedia = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        width: 1080, 
        height: 1920, 
        facingMode: 'user' 
      }
    });
    
    if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
          setMediaStream(stream);
      }
  }, []);

  useEffect(() => {
    if (path.includes('/upload')) {
      handleMedia()
    } else {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => {
          track.stop()
        })
        setMediaStream(null)
      }
    }
  }, [handleMedia, path, mediaStream]);

  return {
    mediaStream
  }
}