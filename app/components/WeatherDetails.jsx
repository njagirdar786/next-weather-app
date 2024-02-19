import React from "react";

function WeatherDetails({ data }) {
  let iconUrl = "https:" + data.current.condition.icon;

  return (
    <>
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
