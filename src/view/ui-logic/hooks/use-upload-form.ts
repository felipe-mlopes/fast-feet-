import { usePathname } from "next/navigation";
import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

export function useUploadForm() {
  const videoConstraints = {
    width: {
      max: 1980,
      ideal: 1024,
    }, 
    height: {
      max: 1080,
      ideal: 768,
    }, 
    facingMode: 'user'
  }

  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false)
  const [url, setUrl] = useState<string | null>(null)

  const webcamRef = useRef<Webcam>(null)

  const handleCapturePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot()

    if (imageSrc) {
      setUrl(imageSrc)
    }
  }, [webcamRef])

  function handleCleanPhoto() {
    setUrl(null)
  }

  const path = usePathname()

  useEffect(() => {
    if (path.includes('/upload')) {
      setCaptureEnable(isCaptureEnable!)
    } 
  }, [path, isCaptureEnable]);

  return {
    videoConstraints,
    webcamRef,
    handleCapturePhoto,
    url,
    handleCleanPhoto
  }
}