"use client";

import { useRef } from "react";

import { UseCamera } from "@/view/ui-logic/hooks/use-camera";

export function Camera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { mediaStream } = UseCamera();

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
