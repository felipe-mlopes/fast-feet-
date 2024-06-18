"use client";

import { useCamera } from "@/view/ui-logic/hooks/use-camera";

export function Camera() {
  const { mediaStream, videoRef } = useCamera();

  if (
    mediaStream &&
    mediaStream instanceof MediaStream &&
    videoRef.current &&
    !videoRef.current.srcObject
  ) {
    videoRef.current.srcObject = mediaStream;
  }

  function handleCanPlay() {
    videoRef.current?.play();
  }

  return (
    <video
      ref={videoRef}
      onCanPlay={handleCanPlay}
      muted
      className="w-full h-full"
    />
  );
}
