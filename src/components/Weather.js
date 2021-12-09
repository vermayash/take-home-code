import React, { useEffect, useState } from "react";

const Weather = () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [apiData, setApiData] = useState({});

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`;

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    await fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const kelvinToFaren = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card " style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="display-4">Weather</h5>
          <div className="card-body">
            {apiData.main ? "City: " + apiData.name : ""}
            <br />
            {apiData.main ? "Temperature: " + apiData.main.temp : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
