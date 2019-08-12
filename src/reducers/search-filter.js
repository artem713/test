import { TYPES } from '../actions/search-filter'

const initialState = {
  filter: '',
}

export const searchFilterReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.FILTER:
      return {
        ...initialState,
        filter: action.payload,
      }

    case TYPES.RESET_FILTER:
      return {
        ...initialState
      }

    default:
      return state
  }
}

export const getFilter = (state) => state.filter
