import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import PropTypes from 'prop-types';


const key = 'e49083fd2506c38974d99a7f26824d4c';
const url = 'https://api.openweathermap.org/data/2.5/weather'


class  WeatherLocation extends Component{  //class component: así puedo trabajar con el lifecycle, Y EL ESTADO.
    constructor({ city }){
        super();
        this.state = {
            data: null,
            city,
        }
    }
    

    getData = () =>{
        const api_weather = `${url}?q=${this.state.city}&appid=${key}&units=metric`;
        
        fetch(api_weather).then((data)=>{
            return data.json();
        }).then(weather_data =>{
            const data = transformWeather(weather_data);
            this.setState({ data });
        })
    }
    componentWillMount(){
        this.getData()
    }
    componentDidMount(){
    }
    componentWillUpdate(){
    }
    componentDidUpdate(){
    }
    render = () =>{
        const {onWeatherLocationClick}  = this.props;
        const { city, data } = this.state;
        return (
            < div className='weatherLocationContainer' onClick={onWeatherLocationClick}>
                <Location city={city}/>
               { data ? <WeatherData data={data}/> : 'cargando...' }
            </div>
        )}
};

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;

//componente funcional: Componente que hace una sola cosa, una sola funcion. XD 