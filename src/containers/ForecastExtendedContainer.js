import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import {getForecastDataFromCities, getCity} from '../reducers';
import { connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData } = this.props;
        return (
           city &&
            <ForecastExtended city={city} forecastData={forecastData}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
};
const mapStatetoProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state) }); //state.city destructuring.

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);