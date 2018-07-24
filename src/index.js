import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css'
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
