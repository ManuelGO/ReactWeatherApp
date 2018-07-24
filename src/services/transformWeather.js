import {  SUN } from './../constants/weathers';


const transformWeather = (weather_data) =>{
    console.log(weather_data)
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState('weather');

    const data = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}
 const getWeatherState = (weather) =>{
    return SUN;
}

export default transformWeather;