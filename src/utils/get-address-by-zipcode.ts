export async function getAddressByZipcode(zipcode: string) {
    const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "default"
    });

    const data = await response.json();

    return {
      addressFull: data,
    };
  }