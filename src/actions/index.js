export const ActionTypes = {
  MODULE_CHANGE: 'MODULE_CHANGE',
}

export function createAction(type, payload = '', meta = '') {
  return {
    type,
    payload,
    meta,
  }
}
