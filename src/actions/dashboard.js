import { createAction } from 'redux-actions'

export const TYPES = {
  FETCH_ITEMS: 'dashboard/FETCH_ITEMS',
  ITEMS_FETCHED: 'dashboard/ITEMS_FETCHED',
  CHANGE_ITEM_STATUS: 'dashboard/CHANGE_ITEM_STATUS',
}

export const ACTIONS = {
  fetchItems: createAction(TYPES.FETCH_ITEMS),
  itemsFetched: createAction(TYPES.ITEMS_FETCHED, (resp) => resp),
  changeItemStatus: createAction(TYPES.CHANGE_ITEM_STATUS, (id, newStatus) => ({id, status: newStatus})),
}
