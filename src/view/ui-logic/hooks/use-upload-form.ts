import { useRef, useState } from "react";

import { useCamera } from "@/view/ui-logic/hooks/use-camera";

export function useUploadForm() {
	const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const { mediaStream } = useCamera();

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

  function handleTakePhoto() {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current!;
    let photo = photoRef.current!;

    let photoWidth = photo.width!;
    let photoHeight = photo.height!;

    photoWidth = width;
    photoHeight = height;

    let ctx = photo?.getContext("2d");
    ctx?.drawImage(video, 0, 0, photoWidth, photoHeight);

    setHasPhoto(true);
  }

  function handleCleanPhoto() {
    let photo = photoRef.current!;
    let ctx = photo?.getContext("2d");

    ctx?.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  }

  return {
    photoRef,
    videoRef,
    hasPhoto,
    handleCanPlay,
    handleTakePhoto,
    handleCleanPhoto
  }
}