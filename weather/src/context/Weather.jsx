import { createContext, useContext, useState } from "react";
import { getWeatherData } from '../api/index'

export const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {

    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState(null);


    const fetchWeatherData = async () => {
        const res = await getWeatherData(city)
        setWeatherData(res)
    };


    return (
        <WeatherContext.Provider value={{ setWeatherData, setCity, city, weatherData, fetchWeatherData }} >
            {props.children}
        </WeatherContext.Provider>
    )
}