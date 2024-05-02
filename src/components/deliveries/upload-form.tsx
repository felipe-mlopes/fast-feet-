"use client";

import { CameraIcon } from "../icons/camera-icon";

export function UploadForm() {
  return (
    <form action="">
      <label htmlFor="myFile" className="w-full h-full cursor-pointer">
        <CameraIcon />
      </label>
      <input type="file" name="file" id="myFile" className="hidden" />
      {/* <input type="submit" value="upload" /> */}
    </form>
  );
}
