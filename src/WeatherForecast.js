
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'
import WeatherForecastPreview from './WeatherForecastPreview.js';

export default function WeatherForecast(props) {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    function handleForecastResponse(response) {
        setForecast(response.data);
        setReady(true);
   } 

    if(ready && props.city === forecast.city.name) {
        return (
        <div className="WeatherForecast">
        <h6>Hourly Forecast</h6>    
        <div className="WeatherForeacast row">
            <WeatherForecastPreview data={forecast.list[0]} />
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            <WeatherForecastPreview data={forecast.list[4]} />
            <WeatherForecastPreview data={forecast.list[5]} />
        </div>  
        </div>  
        )
    } else {
    let apiKey = "38ee66e006ad6799cd5e67b4927af9b1";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(handleForecastResponse);

    return null;
    }
}

