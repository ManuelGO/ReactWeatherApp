import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'materialize-css'; // It installs the JS asset only

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
