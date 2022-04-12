import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Pages/Home'
import Cart from '../Pages/Cart'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/pagar/:cart' component={Cart} />
      </Switch>
    </BrowserRouter>
  )
}