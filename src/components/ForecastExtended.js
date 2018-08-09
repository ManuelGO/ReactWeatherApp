import React, {Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from '../services/transformForecast';
import ForecastItem from './ForecastItem';
import './styles.css';


const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}/>));
   
    }

const  ForecastExtended = ({city, forecastData}) => (


        <div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city} </h2>
           {forecastData ? renderForecastItemDays(forecastData) : 'Cargando....'}
        </div>
 

)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
}

export default ForecastExtended;