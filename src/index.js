import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css'; // It installs the JS asset only
import {store} from './store';

ReactDOM.render(
    //Provider: Proveer del store al todos los componentes de nuestra app.
<Provider store={ store }> 
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
