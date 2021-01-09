import React from "react";
import './Weather.css'

export default function Weather() {
return (
    <div className="weather">
        <form className="search-form">
            <div className="row">
                <div className="col-5">
                    <input 
                        type="search" 
                        placeholder="Search for a city.."
                        autofocus="on"
                        className="form-control"
                    />
                </div>
                 <div className="col-3">
                    <input 
                        value="Search" 
                        type="submit"
                        className="form-control"
                    />
                </div>   
                <div className="col-4">
                     <input 
                        value="Current City"
                        type="submit"
                        className="form-control"
                    />
                </div>
            </div>
        </form>
        <div className="row">
            <div className="location col-7">
                <h2 className="city">
                    <strong>Vancouver</strong>
                </h2> 
                <h4 className="description">
                    Cloudy
                </h4>
            </div>
            
            <div className="current-time col-5">
                <p>
                    14:26
                </p>
            </div> 
        </div>
    <div className="row">
       <div className="current-temperature col-6"> 
            <img src="" alt=""/>☁️
            <strong>12</strong><span>ºC</span>
            
        </div>
        <div className="current-specifications col-6">
        <ul>
            <li>
                Feels like: <span>11</span>ºC
            </li>
            <li>
                Humidity: <span>40</span>%
            </li>
            <li>
                Wind: <span>0</span> m/s
            </li>
        </ul>
        </div>
    </div>
    <div class="row forecast"></div>
</div>
)
}