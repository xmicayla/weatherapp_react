import React from "react";
import FormattedDate from './FormattedDate.js';
import WeatherTemperature from './WeatherTemperature.js';
import WeatherForecast from './WeatherForecast.js';
import WeatherIcon from './WeatherIcon';

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <div className="row">
            <div className="location col-7">
                <p className="city">
                    <strong>{props.data.city}</strong>
                </p> 
                <h4 className="description text-capitalize">
                    {props.data.description}
                </h4>
            </div>
            
            <div className="current-time col-5">
                 <FormattedDate date={props.data.date} />
            </div> 
        </div>
    <div className="row">
       <div className="current-temperature-icon col-2 float-left"> 
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
       <WeatherTemperature className="col-7" celsius={props.data.temperature} />
        <div className="current-specifications col-5">
        <ul>
            <li>
                Feels like: <span>{Math.round(props.data.feelsLike)}</span>ºC
            </li>
            <li>
                Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
                Wind: <span>{Math.round(props.data.wind)}</span> m/s
            </li>
        </ul>
        </div>
    </div>
    <WeatherForecast city={props.data.city} />
    </div>
    )
}