/**
 * Created by liekkas on 15/12/17.
 */
import { combineReducers } from 'redux'
import globalReducer from './globalReducer'
import otherReducer from './otherReducer'
import { routerReducer as router } from 'react-router-redux'

const rootReducer = combineReducers({
  global: globalReducer,
  other: otherReducer,
  router
})

export default rootReducer
