import React from "react";
 import ReactDOM from 'react-dom/client'
 import './index.css'
import {App} from './HelloWorld.jsx';
import {FirstApp} from "./FirstApp.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp/>
    </React.StrictMode>

)