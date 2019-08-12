import { combineReducers } from 'redux'
import { dashboardReducer } from './dashboard'
import { searchFilterReducer } from './search-filter'

export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  searchFilter: searchFilterReducer
})