import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {setCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    handleSelectionLocation = city => {
        this.props.dispatchSetCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.cities} 
                onSelectedLocation={this.handleSelectionLocation}>
            </LocationList>
        )
    }
}

LocationListContainer.propTypes = {
    dispatchSetCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    dispatchSetCity: value => dispatch(setCity(value))
  });
  
const AppConnected = connect(null, mapDispatchToPropsActions)(LocationListContainer);

export default AppConnected;