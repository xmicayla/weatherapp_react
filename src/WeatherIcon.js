import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeMapping = {
        "01d": "CLEAR_DAY",
        "01n": "CLEAR_NIGHT",
        "02d": "PARTLY_CLOUDY_DAY",
        "02n": "PARTLY_CLOUDY_NIGHT",
        "03d": "CLOUDY",
        "03n": "CLOUDY",
        "04d": "CLOUDY",
        "04n": "CLOUDY",
        "09d": "RAIN",
        "09n": "RAIN",
        "10d": "RAIN",
        "10n": "RAIN",
        "11d": "RAIN",
        "11n": "RAIN",
        "13d": "SNOW",
        "13n": "SNOW",
        "50d": "FOG",
        "50n": "FOG"
    }

    const codeMappingColor = {
        "01d": "#EF810F",
        "01n": "#053752",
        "02d": "#EF810F",
        "02n": "#053752",
        "03d": "#053752",
        "03n": "#053752",
        "04d": "#053752",
        "04n": "#053752",
        "09d": "#001A26",
        "09n": "#001A26",
        "10d": "#001A26",
        "10n": "#001A26",
        "11d": "#001A26",
        "11n": "#001A26",
        "13d": "#81C1DF",
        "13n": "#81C1DF",
        "50d": "#D4D2D4",
        "50n": "#D4D2D4"
    }

    return (
    <div className="WeatherIcon">
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color={codeMappingColor[props.code]}
        size={40}
        animate={true}
        />
    </div>
    )
}