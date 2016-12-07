/**
 * Created by liekkas on 16/3/30.
 */
import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import makeRoutes from './router'
import style from './styles/index.less'
import './styles/antd/index.less'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore()
const route = makeRoutes(store)
const history = syncHistoryWithStore(browserHistory,store)

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        {props.route}
      </Router>
    </Provider>
  )
}

const Test = () => {return <div className={style.test}>Hello</div>}

ReactDOM.render(
  <Root route={route} store={store} history={history} />,
  document.getElementById('root')
)
