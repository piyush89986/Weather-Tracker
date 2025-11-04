import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../redux/reducer/weatherslice";



export default function SearchBar() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city) return;
    dispatch(fetchWeather(city));
    setCity("");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-center gap-2 mt-6"
    >
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-lg w-64 border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
      >
        Search
      </button>
    </form>
  );
}
