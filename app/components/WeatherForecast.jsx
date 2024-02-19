import React from "react";

function WeatherForecast() {
  return (
    <>
      <div className="card bg-gradient-to-br from-green-300 to-gray-900 lg:col-span-2 md:col-span-2">
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
    </>
  );
}

export default WeatherForecast;
