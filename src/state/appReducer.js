import { INCREMENT_COUNT, DECREMENT_COUNT } from './actionTypes.js'

const initialState = {
  count: 0
}

export function appReducer(state = initialState, { payload, type }) {
  switch (type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 }

    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 }

    default:
      return state
  }
}
