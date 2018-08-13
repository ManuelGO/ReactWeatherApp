import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import PropTypes from 'prop-types';


const  WeatherLocation = ({onWeatherLocationClick, city, data}) => (  //class component: así puedo trabajar con el lifecycle, Y EL ESTADO.

            <div className='weatherLocationContainer' onClick={onWeatherLocationClick}>
                <Location city={city}/>
               { data ? <WeatherData data={data}/> : 'cargando...' }
            </div>
 
    );

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({ //para tipado.
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default WeatherLocation;

//componente funcional: Componente que hace una sola cosa, una sola funcion. XD 