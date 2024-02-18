import React from "react";

function WeatherDetails({ data }) {
  let iconUrl = "https:" + data.current.condition.icon;

  return (
    <>
      <div className="card bg-gradient-to-br from-purple-500 to-gray-900">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Today</h2>
          <p>{data.location.name}</p>
          <p>{data.current.temp_c}°C</p>
          <div className="kbd bg-primary">
            <img src={iconUrl} alt="icon" height="40" width="40" />
            <p>{data.current.condition.text}</p>
          </div>
          <p>{data.location.localtime}</p>
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
    </>
  );
}

export default WeatherDetails;
