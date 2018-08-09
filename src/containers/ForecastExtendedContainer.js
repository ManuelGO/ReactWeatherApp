import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { connect} from 'react-redux';

class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city}/>
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};
const mapStatetoProps = ({city}) => ({city}); //state.city destructuring.

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);