import * as React from 'react'
import { Provider } from 'react-redux'
import Dashboard from '../../containers/dashboard.container'
import SearchFilter from '../../containers/search-filter.container'
import { store } from '../../store'

export const App = () => (
  <Provider store={store}>
    <SearchFilter/>
    <Dashboard/>
  </Provider>
)