/**
 * Created by liekkas on 15/12/17.
 */
import { ActionTypes } from '../actions';

const initState = {
}

export default function otherReducer(state = initState, action = {}) {
  switch (action.type) {
    case ActionTypes.INIT_USER:
      return state
    default:
      return state
  }
}
