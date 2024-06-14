"use client";

import { useUploadForm } from "@/view/ui-logic/hooks/use-upload-form";

import { CameraIcon } from "@/view/components/icons/camera-icon";
import { RepicIcon } from "@/view/components/icons/repic-icon";

export function UploadForm() {
  const {
    photoRef,
    videoRef,
    hasPhoto,
    handleCanPlay,
    handleTakePhoto,
    handleCleanPhoto,
  } = useUploadForm();

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
