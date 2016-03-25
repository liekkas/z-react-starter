/**
 * Created by liekkas on 15/12/17.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

export default function configureStore (initialState = {}, history) {
  let middleware = applyMiddleware(thunk, routerMiddleware(history))

  if (__DEV__) {
    const devTools = require('./containers/DevTools').default.instrument()
    middleware = compose(middleware, devTools)
  }

  // Create final store and subscribe router in debug env ie. for devtools
//  const store = middleware(createStore)(rootReducer, fromJS(initialState))
  const store = middleware(createStore)(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

