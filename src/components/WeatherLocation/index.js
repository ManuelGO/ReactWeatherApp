import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {  SUN } from './../../constants/weathers';

const location = 'Buenos Aires, ar';
const key = 'e49083fd2506c38974d99a7f26824d4c';
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;
const data = {
     temperature: 20,   
     weatherState: SUN,
     humidity: 10,
     wind: '10 m/s'
}

class  WeatherLocation extends Component{  //class component: así puedo trabajar con el lifecycle, Y EL ESTADO.
    constructor(){
        super();
        this.state = {
            data: data,
            city: 'Buenos Aires!'
        }
    }
    handleUpdateClick = () =>{
        
        fetch(api_weather).then((data)=>{
            console.log(data)
        })
        // this.setState({
        //     city: 'Santo Domingo!',
        //     data: data2
        // })
    }
    render = () =>{
        
        const { city, data } = this.state;
        return (
            < div className='weatherLocationContainer' >
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )}
};

export default WeatherLocation;

//componente funcional: Componente que hace una sola cosa, una sola funcion. XD