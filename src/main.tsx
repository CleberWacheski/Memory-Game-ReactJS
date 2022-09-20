import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './app.routes'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { UserContextProvider } from './contexts/user'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
  <BrowserRouter>
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  </BrowserRouter>
  //</React.StrictMode>
)
