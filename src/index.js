import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './common/style/button.css'
import './common/style/font.css'
import {CookiesProvider} from 'react-cookie'
import {PayPalScriptProvider} from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <PayPalScriptProvider
                options={{
                    "client-id": "ATc6L5WpgGfK0u-ebwN5XNbdeU2A40peN8S8WD3E9ORXuaTpvU7Uf-JyxiRV5BR16BbWAu837JeDFD68",
                    components: "buttons",
                    currency: "GBP"
                }}
            >
            <CookiesProvider>
                <App />
            </CookiesProvider>
        </PayPalScriptProvider>
    </React.StrictMode>
);
    