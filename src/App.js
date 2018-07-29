import React, { Component } from 'react';
import LocationList from './components/LocationList';
import {Grid, Row, Col} from 'react-flexbox-grid'
import './App.css';
import { MuiThemeProvider} from 'material-ui/styles/MuiThemeProvider'

const cities = [
  'Santo Domingo,do',
  'Toronto,ca',
  'Mexico,mx',
  'A coruna,es',
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log('HandleselectionLocation works', city)
  }

  render() {
    return (
        <Grid>
          <Row>
            <Col  xs={12}>
              <h1>Título</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} 
                      onSelectedLocation={this.handleSelectionLocation}>
              </LocationList>
            </Col>
            <Col  xs={12} md={6}>
              <div className='detail'></div>
            </Col>
          </Row>
          
        </Grid>
    );
  }
}

export default App;
