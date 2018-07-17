import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo'
import {  SNOW } from '../../../constants/weathers';
import './styles.css';


const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={25} weatherState={SNOW}/>
        <WeatherExtraInfo humidity={80} wind={'20m/s'}/>
    </div>
);

export default WeatherData;