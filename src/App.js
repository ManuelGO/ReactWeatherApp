import React, { Component } from 'react';
import LocationListContainer from './containers/LocationListContainer';
import {Grid, Row, Col} from 'react-flexbox-grid'
import './App.css';
import ForecastExtended from './components/ForecastExtended';
//import { MuiThemeProvider} from 'material-ui/styles/MuiThemeProvider'

const cities = [
  'Santo Domingo,do',
  'Toronto,ca',
  'Mexico,mx',
  'A coruna,es',
  'Madrid,es',
];


class App extends Component {
  //constructor es necesario para el state.

  constructor(){
    super() //esto llama el constructor de Component
    this.state =  {city: null};  //esta asignación sólo se puede hacer en el constructor, a partir de ahí setState.
  }


  render() {
    const {city} = this.state;
    return (
        <Grid>
          <Row>
            <Col  xs={12}>
              <h1>Título</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}>
              </LocationListContainer>
            </Col>
            <Col  xs={12} md={6}>
              <div className='detail'>
                { //Que hacer si city es null?
                  // !city ? <h1>Seleccionar una ciudad</h1> : <ForecastExtended city={city}/> 
                  city && <ForecastExtended city={city} />
                  }              
              </div>
            </Col>
          </Row>
          
        </Grid>
    );
  }
}




export default App;