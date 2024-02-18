"use client";

import { useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import WeatherForecast from "./components/WeatherForecast";

export default function Home() {
  const [location, setLocation] = useState("Leeds");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/weather?location=${location}`, {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      const data = await response.json();
      console.log(data);
      setWeather(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center p-4 bg-black text-white min-h-screen">
      <Search />

      {weather && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <WeatherDetails data={weather} />
          <WeatherForecast />
        </div>
      )}
    </div>
  );
}
