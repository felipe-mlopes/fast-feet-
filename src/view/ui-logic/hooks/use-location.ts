import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { getCurrentPosition } from "@/view/ui-logic/utils/geolocation";
import { getCityByCoordinatesAction } from "@/view/ui-logic/actions/get-city-by-coordinates.action";

export function useLocation() {
    const [location, setLocation] = useState("");

    const handleGetLocation = useCallback(async () => {
      const { lat, lng } = await getCurrentPosition({
        enableHighAccuracy: true,
      });
  
      const latitude = String(lat);
      const longitude = String(lng);
  
      const coordinates = await getCityByCoordinatesAction(latitude, longitude);
  
      if (coordinates.data) {
        setLocation(coordinates.data);
      }
    }, []);

    const path = usePathname();
    const router = useRouter();
  
    useEffect(() => {
      handleGetLocation();

      if (location) {
        router.push(`${path}?city=${location}`);
      }
    }, [handleGetLocation, location, router, path]);

    return {
        location
    }
}