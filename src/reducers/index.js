import { combineReducers } from 'redux';
import { cities, 
        getForecastDataFromCities as _getForecastDataFromCities,
        getWeatherCities as _getWeatherCities } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city,
});

export const getCity = state => state.city;
export const getForecastDataFromCities = state => (_getForecastDataFromCities(state.cities, state.city));
export const getWeatherCities = _getWeatherCities;
//selector:

//export const getForecastDataFromCities = (state) => state[city] && state[city].forecastData;