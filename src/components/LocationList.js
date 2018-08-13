import React from 'react';
import WeatherLocation from './WeatherLocation/index';
import PropTypes from 'prop-types';
import './styles.css'


const LocationList = ({ cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        onSelectedLocation(city);
    }
    
    const strToComp = cities => {
        return cities.map( city => (<WeatherLocation 
                                        key={city.key} 
                                        city={city.name}
                                        data={city.data}   
                                        onWeatherLocationClick={()=>handleWeatherLocationClick(city.name)} />))
     }
     
   return( 
   <div className='locationList'>
       {strToComp(cities)}
    </div>
   
)}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;


//