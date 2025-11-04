import ForecastList from "./components/Forecastlist";
import SearchBar from "./components/Searchbar";
import WeatherCard from "./components/Weathercard";


export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 flex flex-col items-center py-10">
      <h1 className="text-3xl text-white font-bold">Weather Dashboard</h1>
      <SearchBar />
      <WeatherCard />
      <ForecastList />
    </div>
  );
}
