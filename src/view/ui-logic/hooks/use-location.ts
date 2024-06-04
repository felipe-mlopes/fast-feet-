import { getCurrentPosition } from "@/view/ui-logic/utils/geolocation";
import { getCityByCoordinates } from "@/view/ui-logic/utils/get-city-by-coordinates";
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
    }, [handleGetLocation]);

    return {
        location
    }
}