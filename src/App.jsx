import React from "react"

import { BrowserRouter as Router } from "react-router-dom"

import { AppContextProvider } from './contexts'

import AppRoutes from './routes'

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppContextProvider>
  )
}

export default App
