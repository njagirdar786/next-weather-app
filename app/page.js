"use client";

import { useState, useEffect } from "react";
import Search from "./components/Search";

export default function Home() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Use a relative URL for the API route
      const response = await fetch(`/api/weather?location=London`, {
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

      <h1>{weather.location.name}</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card bg-gradient-to-br from-purple-500 to-gray-900">
          <div className="card-body items-center text-center">
            <h2 className="card-title">21°C</h2>
            <p>Leeds</p>
            <p>Thu 8 Feb 2023</p>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-300 to-gray-900">
          <div className="card-body">
            <h2 className="card-title">3 Days Forecast</h2>
            <div className="flex justify-between">
              <span>Monday</span>
              <span>23°C</span>
            </div>
            <div className="flex justify-between">
              <span>Tuesday</span>
              <span>11°C</span>
            </div>
            <div className="flex justify-between">
              <span>Wednesday</span>
              <span>31°C</span>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-cyan-300 to-gray-900">
          <div className="card-body">
            <h2 className="card-title">Today's Highlights</h2>
            <div className="flex justify-between">
              <span>Humidity</span>
              <span>84%</span>
            </div>
            <div className="flex justify-between">
              <span>Humidity</span>
              <span>84%</span>
            </div>
            <div className="flex justify-between">
              <span>Humidity</span>
              <span>84%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
