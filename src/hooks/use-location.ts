import { getCurrentPosition } from "@/utils/geolocation";
import { getCityByCoordinates } from "@/utils/get-city-by-coordinates";
import { useCallback, useEffect, useState } from "react";

export function useLocation() {
    const [location, setLocation] = useState("");

    const handleGetLocation = useCallback(async () => {
      const { lat, lng } = await getCurrentPosition({
        enableHighAccuracy: true,
      });
  
      const latitude = String(lat);
      const longitude = String(lng);
  
      const coordinates = await getCityByCoordinates(latitude, longitude);
  
      if (coordinates) {
        setLocation(coordinates.city);
      }
    }, []);
  
    useEffect(() => {
      handleGetLocation();
    });

    return {
        location
    }
}