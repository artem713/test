import { createAction } from 'redux-actions'

export const TYPES = {
  FILTER: 'search-filter/SET_FILTER',
  RESET_FILTER: 'search-filter/RESET_FILTER',
}

export const ACTIONS = {
  filterItems: createAction(TYPES.FILTER, (filter) => filter),
  resetFilter: createAction(TYPES.RESET_FILTER),
}
