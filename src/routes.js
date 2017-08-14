import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Header from './Header'
import Home from './Home'
import Contact from './Contact'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Header}>
      <IndexRoute component={Home} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
)

export default routes
