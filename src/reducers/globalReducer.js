/**
 * Created by liekkas on 15/12/17.
 */
import { ActionTypes } from '../actions'
import { LOCATION_CHANGE } from 'react-router-redux'

const initState = {
  module: 'home',
}

export default function globalReducer(state = initState, action = {}) {
  switch (action.type) {
    case LOCATION_CHANGE:
      const module = action.payload.pathname.substr(1)
      return {...state, module: module === '' ? 'home' : module}
    case ActionTypes.MODULE_CHANGE:
      return state
    default:
      return state
  }
}
