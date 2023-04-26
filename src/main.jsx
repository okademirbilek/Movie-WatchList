import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"
import App from './App'
import './index.css'
import { SnackbarProvider} from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router> 
    </ContextProvider>
  </React.StrictMode>,
)



  
