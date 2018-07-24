import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import {  Preloader } from 'react-materialize';


const location = 'Buenos Aires, ar';
const key = 'e49083fd2506c38974d99a7f26824d4c';
const api_weather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;

class  WeatherLocation extends Component{  //class component: así puedo trabajar con el lifecycle, Y EL ESTADO.
    constructor(){
        console.log('constructor')
        super();
        this.state = {
            data: null,
            city: 'Buenos Aires!'
        }
    }
    

    getData = () =>{
        
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
        console.log('did mount');
    }
    componentWillUpdate(){
        console.log('will update');
    }
    componentDidUpdate(){
        console.log('did update');
    }
    render = () =>{
        console.log('render')
        const { city, data } = this.state;
        return (
            < div className='weatherLocationContainer' >
                <Location city={city}/>
               { data ? <WeatherData data={data}/> : 'cargando...' }
            </div>
        )}
};

export default WeatherLocation;

//componente funcional: Componente que hace una sola cosa, una sola funcion. XD 