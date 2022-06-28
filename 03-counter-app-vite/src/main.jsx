import React from 'react';
import ReactDOM from 'react-dom/client';//client
import CounterApp from './CounterApp';
//import HelloWordApp from './HelloWordApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <HelloWordApp/> */}
        <CounterApp value={10}/>
    </React.StrictMode>
);