import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => (
    <div>
        <Location city={'Buenos Aireds!'}/>
        <WeatherData/>
    </div>
);

export default WeatherLocation;

//componente funcional: Componente que hace una sola cosa, una sola funcion. XD