/**
 * Created by liekkas on 15/12/14.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import makeRoutes from './routes'
import { Root } from './containers'
//import './normalize.css'
import 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import 'loaders.css/loaders.min.css'
import './styles/common.scss'
import 'antd/style/index.less'
import configureStore from './configureStore'
import { useRouterHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, browserHistory)

const routes = makeRoutes(store)

ReactDOM.render(
  <Root history={browserHistory} route={routes} store={store} />,
  document.getElementById('root')
)
