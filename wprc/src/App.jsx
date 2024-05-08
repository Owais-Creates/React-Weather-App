import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const [cityData, setCityData] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  const baseURL = "https://api.weatherapi.com/v1/current.json?key=1e0fcde1a6094481a4a150500240705";

  const getWeatherData = async () => {
    if (cityData !== "") {
      const res = await fetch(`${baseURL}&q=${cityData}`);
      const Data = await res.json();
      setWeatherData(Data);
    }
  }

  // const handleSearchClick = () => {
  //   setSearchClicked(true);
  // }

  // useEffect(() => {
  //   if (searchClicked) {
  //     getWeatherData();
  //     setSearchClicked(false); // Reset searchClicked state
  //   }
  // }, [searchClicked]);

  return (
    <>
      <div className='w-full h-screen bg-zinc-400 flex justify-center flex-col items-center gap-5'>
        <h1 className='-mt-5 font-bold font-sans text-3xl'>Weather Forecast</h1>
        <div className='flex gap-2'>
          <Input onInputChange={setCityData} />
          <Button onClick={getWeatherData} value="Search" />
        </div>
        <Card weatherData={weatherData} />
      </div>
    </>
  )
}

export default App;
