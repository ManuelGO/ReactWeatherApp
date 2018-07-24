import React from 'react';
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';


const LocationList = ({ cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log('wclick worin')
        onSelectedLocation(city);
    }
    
    const strToComp = cities => {
        return cities.map( city => (<WeatherLocation key={city} city={city}   
                        onWeatherLocationClick={()=>handleWeatherLocationClick(city)}/>))
     }
     
   return( 
   <div>
       {strToComp(cities)}
    </div>
   
)}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;


//