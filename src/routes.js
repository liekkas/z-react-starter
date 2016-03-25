import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import { App, Home, ModuleA } from './containers'
import { NotFound, About } from './components'

export default (store) => (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="moduleA" component={ModuleA} />
    <Route path="*" component={Home} status={404} />
  </Route>
)
