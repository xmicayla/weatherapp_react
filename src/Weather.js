import React, { useState } from "react";
import './Weather.css';
import FormattedDate from './FormattedDate.js'
import axios from "axios";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready : false });
function handleResponse(response) {
    setWeatherData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        city: response.data.name,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity
    });
}

 if (weatherData.ready) {
 return (
    <div className="weather">
        <form className="search-form">
            <div className="row">
                <div className="col-5">
                    <input 
                        type="search" 
                        placeholder="Search for a city"
                        autoFocus="on"
                        className="form-control"
                    />
                </div>
                 <div className="col-3">
                    <input 
                        value="Search" 
                        type="submit"
                        className="form-control btn btn-primary"
                    />
                </div>   
                <div className="col-4">
                     <input 
                        value="Current City"
                        type="submit"
                        className="form-control btn btn-success"
                    />
                </div>
            </div>
        </form>
        <div className="row">
            <div className="location col-7">
                <h2 className="city">
                    <strong>{weatherData.city}</strong>
                </h2> 
                <h4 className="description text-capitalize">
                    {weatherData.description}
                </h4>
            </div>
            
            <div className="current-time col-5">
                <p>
                    <FormattedDate date={weatherData.date} />
                </p>
            </div> 
        </div>
    <div className="row">
       <div className="current-temperature col-5"> 
            <img src="" alt=""/>☁️
            <strong>{Math.round(weatherData.temperature)}</strong>º
        </div>
        <ul className="unit col-2">
                <li>ºC  |</li>
                <li>ºF</li>
        </ul>
        <div className="current-specifications col-5">
        <ul>
            <li>
                Feels like: <span>{Math.round(weatherData.feelsLike)}</span>ºC
            </li>
            <li>
                Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
                Wind: <span>{Math.round(weatherData.wind)}</span> m/s
            </li>
        </ul>
        </div>
    </div>
    <div className="row forecast"></div>
</div>
);
} else {
 const apiKey = "8f63cf5ee4f58de004df8b90b6a5e202";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
 return "Loading..."
}
}