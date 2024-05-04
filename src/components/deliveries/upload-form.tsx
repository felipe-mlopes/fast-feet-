"use client";

import { useRef, useState } from "react";

import { UseCamera } from "@/hooks/use-camera";

import { CameraIcon } from "../icons/camera-icon";
import { RepicIcon } from "../icons/repic-icon";

export function UploadForm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const photoRef = useRef<HTMLCanvasElement>(null);

  const [hasPhoto, setHasPhoto] = useState(false);

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

    console.log(width);

    setHasPhoto(true);
  }

  function handleCleanPhoto() {
    let photo = photoRef.current!;
    let ctx = photo?.getContext("2d");

    ctx?.clearRect(0, 0, photo.width, photo.height);

    setHasPhoto(false);
  }

  return (
    <form action="" className="relative h-full">
      {!hasPhoto && (
        <div className="h-full">
          <video
            ref={videoRef}
            onCanPlay={handleCanPlay}
            muted
            className="w-full h-full rounded"
          />
          <button
            onClick={handleTakePhoto}
            className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-black opacity-40 cursor-pointer"
          >
            <CameraIcon />
          </button>
        </div>
      )}
      {hasPhoto && (
        <div className="h-full">
          <canvas ref={photoRef} className="w-full h-full rounded" />
          <button
            onClick={handleCleanPhoto}
            className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-black opacity-40 cursor-pointer"
          >
            <RepicIcon />
          </button>
        </div>
      )}

      {/* <input type="file" name="file" id="myFile" className="hidden" /> */}
      {/* <input type="submit" value="upload" /> */}
    </form>
  );
}
