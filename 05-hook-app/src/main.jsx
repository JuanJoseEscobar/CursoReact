import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterWithCustomeHook } from './01-UseState/CounterWithCustomeHook';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { HookApp } from './HookApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FormWithCustomHook />
  //</React.StrictMode>
)
