import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const city = "Hyderabad";
  const apiKey = "a13f1ebdd255b88eeb4db13b8c89f272"; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data));
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div style={{ fontFamily: "Arial", border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
      <h4>Weather in {weather.name}</h4>
      <p>{weather.weather[0].description}</p>
      <p>Temperature: {weather.main.temp}°C</p>
    </div>
  );
};

export default Weather;
