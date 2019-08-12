import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { dashboardSaga } from './dashboard'

export const rootSaga = function*() {
  try {
    yield all([
      dashboardSaga(),
    ])
  } catch (e) {
    console.error(e)
  }
}


export const sagaMiddleware = createSagaMiddleware()