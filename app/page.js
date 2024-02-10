"use client";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 bg-black text-white min-h-screen">
      <input
        type="text"
        placeholder="Location..."
        className="input w-full max-w-xs mb-8 mt-4"
      />

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
