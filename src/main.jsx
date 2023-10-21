import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRouter from "./routers/AppRouter";
// import App from './App.jsx'
import './index.css'
import HomePage from './components/HomePage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)
