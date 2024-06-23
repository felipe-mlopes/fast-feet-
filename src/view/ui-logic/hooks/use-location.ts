import { useEffect } from "react";

import { getCurrentPosition } from "@/view/ui-logic/utils/geolocation";
import { setCityLocationAction } from "@/view/ui-logic/actions/set-city-location.action";

export function useLocation() {
    const handleSetLocation = async () => {
      const result = await getCurrentPosition({
        enableHighAccuracy: true
      })

      if (result.error) {
        return console.error(result.error)
      }

      const { lat, lng } = result.data!

      const latitude = String(lat)
      const longitude = String(lng)

      await setCityLocationAction(latitude, longitude)
    }

    useEffect(() => {
      handleSetLocation()
    }, [])
}