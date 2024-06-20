interface GetCurrentPositionResponse {
  data?: null | { lat: number; lng: number }
  error?: null | GeolocationPositionError
}

export function getCurrentPosition(
    options?: PositionOptions
  ): Promise<GetCurrentPositionResponse> {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve({
            data: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            error: null,
          }),
        (error) => resolve({
          data: null,
          error,
        }),
        options
      );
    });
  }
  