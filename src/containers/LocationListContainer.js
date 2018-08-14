import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "./../actions";
import { getWeatherCities, getCity } from "../reducers";
import LocationList from "./../components/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setCity, cities, city } = this.props;
    this.props.setWeather(cities);
    this.props.dispatchSetCity(city);
  }

  handleSelectionLocation = city => {
    this.props.dispatchSetCity(city);
  };

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectionLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  dispatchSetCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired
};

const mapDispatchToPropsActions = dispatch => ({
  dispatchSetCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

const AppConnected = connect(
  mapStateToProps,
  mapDispatchToPropsActions
)(LocationListContainer);

export default AppConnected;
