import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComp = cities => {
    cities.map(city => <WeatherLocation city={city} />)
}

const LocationList = ({ cities }) => (
    <div>
        {strToComp(cities)}
    </div>
)
LocationList.PropTypes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList;