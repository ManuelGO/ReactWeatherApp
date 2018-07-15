import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, SNOW, RAIN, WINDY } from '../../../constants/weathers';
import PropTypes from 'prop-types';

const stateToIconName = weatherState => {
    switch(weatherState){
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case SNOW:
            return "snow";
        case RAIN:
            return "rain";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
}

const getWeatherIcon = (weatherState) => {
    return (<WeatherIcons name={stateToIconName(weatherState)} size="2x"/>)
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} ℃`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};
export default WeatherTemperature;