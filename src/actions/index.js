import transformForecast from '../services/transformForecast';
import transformWeather  from '../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload }); //action creator
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const key = 'e49083fd2506c38974d99a7f26824d4c';
const url = 'https://api.openweathermap.org/data/2.5/forecast';
const urlWeather = 'https://api.openweathermap.org/data/2.5/weather';

export const setSelectedCity = payload => {
    return dispatch => {  //middleware thunk
        const url_forecast = `${url}?q=${payload}&appid=${key}&units=metric`;

        //activar en el estado un indicador de busqueda de datos:
        dispatch(setCity(payload));

        return fetch(url_forecast).then(
                data => data.json()
                ).then(
                    weather_data => {
                        const forecastData = transformForecast(weather_data);

                        //modificar el estado con el resultado de la promise(fetch).
                        dispatch(setForecastData({city: payload, forecastData}));
                    }
                );

    }
};

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city))
            const api_weather = `${urlWeather}?q=${city}&appid=${key}&units=metric`;
            fetch(api_weather).then((data)=>{
                return data.json();
            }).then(weather_data =>{
                const weather = transformWeather(weather_data);

                dispatch(setWeatherCity({city, weather}));
            })
        })
    }   
}