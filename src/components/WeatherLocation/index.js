import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = () => (
    <div className='weatherLocationContainer' >
        <Location city={'Buenos Aires!'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;

//componente funcional: Componente que hace una sola cosa, una sola funcion. XD