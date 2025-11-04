import React from "react";
import { useSelector } from "react-redux";


export default function ForecastList() {
  const { forecast } = useSelector((state) => state.weather);

  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 text-center text-white">
      {forecast.map((day, index) => (
        <div
          key={index}
          className="bg-white/10 p-4 rounded-xl backdrop-blur-md shadow-sm"
        >
          <p className="font-semibold">{day.date}</p>
          <p className="text-2xl font-bold">{Math.round(day.temp)}°C</p>
          <p className="capitalize text-sm">{day.desc}</p>
        </div>
      ))}
    </div>
  );
}
