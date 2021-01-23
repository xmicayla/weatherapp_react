import React, { useState } from "react";
import './Weather.css';
import WeatherData from './WeatherData.js'
import axios from "axios";
import Loader from 'react-loader-spinner'

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready : false });
const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
    console.log(response);
    setWeatherData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: response.data.weather[0].icon
    });
}
function handleSubmit(event) {
    event.preventDefault();
    searchCity();
}

function handleCityChange(event) {
    setCity(event.target.value);
}

function searchCity() {
    const apiKey = "8f63cf5ee4f58de004df8b90b6a5e202";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function searchLocation(position) {
  const apiKey = "8f63cf5ee4f58de004df8b90b6a5e202";
  let latitude = (position.coords.latitude);
  let longitude = (position.coords.longitude);
  let currentLocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
  axios.get(currentLocationUrl).then(handleResponse);
}

function handleCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

 if (weatherData.ready) {
 return (
    <div className="weather">
        <form onSubmit={handleSubmit} className="search-form">
            <div className="row">
                <div className="col-5">
                    <input 
                        type="search" 
                        placeholder="Search for a city"
                        autoFocus="on"
                        className="form-control"
                        onChange={handleCityChange}
                    />
                </div>
                 <div className="col-3">
                    <input 
                        value="Search " 
                        type="submit"
                        className="form-control btn btn-primary btn-sm"
                    />
                </div>   
                <div className="col-4">
                     <button
                        type="submit"
                        className="form-control btn btn-success btn-sm"
                        onClick={handleCurrentLocation}>
                        Current City
                        </button>
                </div>
            </div>
        </form>
        <WeatherData data={weatherData} />
</div>
);
} else {
 searchCity();
 return(
      <Loader
         type="TailSpin"
         color="#0069D9"
         height={300}
         width={300}
         timeout={2000} 
      />
     );
}
}