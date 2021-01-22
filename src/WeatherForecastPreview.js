import React from "react";
import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon.js'

export default function WeatherForecastPreview(props) {
    function hours() {
      let date = new Date(props.data.dt * 1000);
      let hours = date.getHours();
      return `${hours}:00`;
    }

    function temperature() {
        let temperature = Math.round(props.data.main.temp);
        return `${temperature}ºC`
    }
    
    return (
        <div className="WeatherForecastPreview col">
                {hours()}
                <WeatherIcon code={props.data.weather[0].icon} hour={hours} />
                {temperature()}
        </div> 
    )
}