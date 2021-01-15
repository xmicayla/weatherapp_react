import React from "react";
import FormattedDate from './FormattedDate.js'

export default function WeatherData(props) {
    return (
        <div className="WeatherData">
            <div className="row">
            <div className="location col-7">
                <h2 className="city">
                    <strong>{props.data.city}</strong>
                </h2> 
                <h4 className="description text-capitalize">
                    {props.data.description}
                </h4>
            </div>
            
            <div className="current-time col-5">
                 <FormattedDate date={props.data.date} />
            </div> 
        </div>
    <div className="row">
       <div className="current-temperature col-5"> 
            <img src="" alt=""/>☁️
            <strong>{Math.round(props.data.temperature)}</strong>º
        </div>
        <ul className="unit col-2">
                <li>ºC  |</li>
                <li>ºF</li>
        </ul>
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
    <div className="row forecast"></div>
    </div>
    )
}