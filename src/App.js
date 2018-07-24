import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

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
        <div className="App">
          <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList>
        </div>
    );
  }
}

export default App;
