import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HookApp } from './HookApp';
// import { CounterWithCustomeHook } from './01-UseState/CounterWithCustomeHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
import { FocusScreen } from './04-useRef/FocusScreen';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FocusScreen />
  //</React.StrictMode>
)
