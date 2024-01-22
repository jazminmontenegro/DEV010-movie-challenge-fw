import React from 'react';
//import { createRoot } from 'react';
//import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css'; // importacion del css global
import {App} from "./App"


// 


const root = createRoot(document.getElementById('root'))
root.render(<App />)

