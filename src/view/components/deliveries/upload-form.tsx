"use client";

import { ReactNode } from "react";
import Webcam from "react-webcam";

import { useUploadForm } from "@/view/ui-logic/hooks/use-upload-form";

import { Button } from "../global/button";

import { CameraIcon } from "@/view/components/icons/camera-icon";
import { RepicIcon } from "@/view/components/icons/repic-icon";

export function UploadForm({ children }: { children: ReactNode }) {
  const {
    videoConstraints,
    handleCapturePhoto,
    webcamRef,
    url,
    handleCleanPhoto,
  } = useUploadForm();

  return (
    <form action="" className="space-y-6 relative h-full">
      {!url && (
        <>
          <div className="h-full">
            <Webcam
              audio={false}
              width={1024}
              height={768}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <button
              onClick={handleCapturePhoto}
              className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-black opacity-40 cursor-pointer"
            >
              <CameraIcon />
            </button>
          </div>
          {children}
        </>
      )}
      {url && (
        <>
          <div>
            <picture>
              <img
                src={url}
                alt="foto capturada"
                className="w-full h-full rounded"
              />
            </picture>
            <button
              onClick={handleCleanPhoto}
              className="flex justify-center items-center absolute bottom-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-black opacity-40 cursor-pointer"
            >
              <RepicIcon />
            </button>
          </div>
          {children}
        </>
      )}
      <div>
        <Button
          content="Enviar foto"
          type="submit"
          disabled={!!!url}
          className="w-full md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
        />
      </div>
    </form>
  );
}
