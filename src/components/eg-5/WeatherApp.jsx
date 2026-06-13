import React, { useState } from "react";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const searchHandler = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=733fbc5dd6abeb30db3d374724309f76&units=metric`,
    );
    const jsonData = await res.json();
    setWeather(jsonData);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter city name"
        value={city}
        className="p-2 border border-gray-300 rounded-b-lg w-3xl mb-4"
      />
      <button onClick={searchHandler} className="bg-blue-500 p-2 rounded-2xl">
        Search
      </button>

      <div className="mb-4">
        {weather ? (
          <div>
            <h1>{weather.name}</h1>
            <p>{weather.main.temp}</p>
          </div>
        ) : (
          <>
            <h1>Enter a City name to get Weather Data!</h1>
          </>
        )}
      </div>
    </div>
  );
}
