import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Santo Domingo, do',
  'Washington dc,us',
  'Ciudad de Mexico,mx',
  'A coruna, es',
  'Madrid, es',
  'Miami, us'
];

class App extends Component {
  render() {
    return (
        <div className="App">
          <LocationList cities={cities}/>
        </div>
    );
  }
}

export default App;
