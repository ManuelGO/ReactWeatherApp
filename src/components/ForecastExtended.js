import React, {Component } from 'react';
import PropTypes from 'prop-types';
import transformForecast from '../services/transformForecast';
import ForecastItem from './ForecastItem';
import './styles.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miécoles',
//     'Jueves',
//     'Viernes',
// ];


// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal'
// }  api.openweathermap.org/data/2.5/forecast?q={city name},{country code} 
const key = 'e49083fd2506c38974d99a7f26824d4c';
const url = 'https://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {
    constructor(){
        super();
        this.state = { forecastData: null }
    }
    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${key}`;
        fetch(url_forecast).then(
            data => data.json()
        ).then(
            weather_data => {
                console.log(weather_data)
                const forecastData = transformForecast(weather_data);
                console.log(forecastData)
                this.setState({ forecastData });
            }
        )
    }
    renderForecastItemDays(forecastData){
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`} 
            weekDay={forecast.weekDay} 
            hour={forecast.hour}
            data={forecast.data}/>));
   
    }
    renderProgress = () => {
        return "cargando....."
    };
    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
        <div>
            <h2 className='forecast-title'>Pronóstico Extendido para {city} </h2>
           {forecastData ? this.renderForecastItemDays(forecastData) : 'Cargando....'}
        </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;