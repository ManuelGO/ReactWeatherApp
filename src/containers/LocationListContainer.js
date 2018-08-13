import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {setSelectedCity, setWeather} from './../actions';
import {getWeatherCities} from '../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    componentDidMount(){
        this.props.setWeather(this.props.cities)
    }

    handleSelectionLocation = city => {
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
};

const mapDispatchToPropsActions = dispatch => ({
    dispatchSetCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities))
  });

const mapStateToProps = state => ({citiesWeather: getWeatherCities(state)});
  
const AppConnected = connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);

export default AppConnected;