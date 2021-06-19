import React from 'react'
// nodejs library that concatenates classes

import { createBrowserHistory } from 'history'
import { Route, Router } from 'react-router-dom'
import Product from './Product'

const App = () => {
  var hist = createBrowserHistory()
  return (
    <div style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
      <Router history={hist}>
        <Route path='/' component={Product} exact />
      </Router>
    </div>
  )
}

export default App
