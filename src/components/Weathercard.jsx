import React from "react";
import { useSelector } from "react-redux";
import { WiHumidity, WiStrongWind, WiSunrise, WiSunset } from "react-icons/wi";

export default function WeatherCard() {
  const { data, loading, error } = useSelector((state) => state.weather);

  if (loading)
    return (
      <div className="text-center text-gray-400 mt-10 text-lg animate-pulse">
        Loading weather data...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-500 mt-10 text-lg">{error}</div>
    );

  if (!data)
    return (
      <div className="text-center text-gray-400 mt-10">
        Search for a city to see weather info
      </div>
    );

  // Extract data safely
  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, humidity },
    weather,
    wind: { speed },
  } = data;

  const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  
  const formatTime = (timestamp) =>
    new Date(timestamp * 1000).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-xl mt-10 max-w-sm mx-auto text-white border border-white/20">
      {/* City + Country */}
      <h2 className="text-3xl font-semibold tracking-wide">
        {name}, <span className="text-gray-300 text-xl">{country}</span>
      </h2>

      {/* Weather Icon + Description */}
      <div className="flex flex-col items-center mt-4">
        <img src={weatherIcon} alt="Weather Icon" className="w-24 h-24" />
        <p className="capitalize text-lg text-gray-200">
          {weather[0].description}
        </p>
      </div>

      {/* Temperature */}
      <h1 className="text-6xl font-bold mt-3">{Math.round(temp)}°C</h1>
      <p className="text-gray-300 text-sm">
        Feels like {Math.round(feels_like)}°C
      </p>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
        <div className="flex items-center justify-center gap-2 bg-white/10 rounded-xl py-2">
          <WiHumidity size={24} /> <span>{humidity}% Humidity</span>
        </div>
        <div className="flex items-center justify-center gap-2 bg-white/10 rounded-xl py-2">
          <WiStrongWind size={24} /> <span>{speed} m/s Wind</span>
        </div>
        <div className="flex items-center justify-center gap-2 bg-white/10 rounded-xl py-2">
          <WiSunrise size={24} /> <span>{formatTime(sunrise)}</span>
        </div>
        <div className="flex items-center justify-center gap-2 bg-white/10 rounded-xl py-2">
          <WiSunset size={24} /> <span>{formatTime(sunset)}</span>
        </div>
      </div>
    </div>
  );
}
