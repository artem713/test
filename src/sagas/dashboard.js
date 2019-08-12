import { takeLatest, put, all } from 'redux-saga/effects'
import { dashboardService } from '../services/dashboard.service'
import { TYPES, ACTIONS } from '../actions/dashboard'

export function* loadItems() {
  const res = dashboardService.getItems()
  yield put(ACTIONS.itemsFetched(res))
}

export function* dashboardSaga() {
  yield all([
    takeLatest(TYPES.FETCH_ITEMS, loadItems),
  ])
}
