import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {CookiesProvider} from 'react-cookie'

ReactDOM.render(
    <CookiesProvider>
        <App />
    </CookiesProvider>
    , document.getElementById('root'))