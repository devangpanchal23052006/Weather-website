import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Surat",
    feelslike: 24.84,
    temp: 25.5,
    tempMin: 25.5,
    tempMax: 25.5,
    humidity: 47,
    weather: "haze",
  });
 
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>weather data by dev!</h1>
      <SearchBox updateInfo={updateInfo }/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
