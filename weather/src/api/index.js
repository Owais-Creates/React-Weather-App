const baseURL = "https://api.weatherapi.com/v1/current.json?key=1e0fcde1a6094481a4a150500240705";

export const getWeatherData = async (city) => {
    let res = await fetch(`${baseURL}&q=${"Delhi"}`)

    const r =  await res.json();
    console.log(r);
}
