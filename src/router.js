/**
 * Created by liekkas on 16/4/5.
 */
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './modules/App'
import Home from './modules/Home'
import Antd from './modules/antd'

export default () => (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/antd' component={Antd}/>
    <Route path='*' component={Home} status={404}/>
  </Route>
)

