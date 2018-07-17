import React from 'react';
import PropTypes from 'prop-types'; //para validaciones tipo interfaces
import './styles.css';

const Location = ({city}) => { //destructuring 
    //const city = props.city;
    //const {city} = props; //destructuring

    return (
    <div className='locationCont' >
        <h1>
            {city}
        </h1>
    </div>
);
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;