import { TYPES } from '../actions/dashboard'

const initialState = {
  items: [],
  isLoading: false,
}

export const dashboardReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TYPES.FETCH_ITEMS:
      return {
        ...initialState,
        isLoading: true,
      }

    case TYPES.ITEMS_FETCHED:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
      }

    case TYPES.CHANGE_ITEM_STATUS:
      return {
        ...state,
        isLoading: false,
        items: state.items.map((item) => {
          if (item.id !== action.payload.id) {
            return item
          }

          return {
            ...item,
            status: action.payload.status
          }
        }),
      }

    default:
      return state
  }
}

export const getItems = (state) => state.items
