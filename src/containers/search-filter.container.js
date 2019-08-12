import { connect } from 'react-redux'
import { SearchFilter } from '../components/search-filter'
import { ACTIONS as SEARCH_FILTER_ACTIONS } from '../actions/search-filter'

const mapDispatchToProps = {
  search: SEARCH_FILTER_ACTIONS.filterItems,
  reset: SEARCH_FILTER_ACTIONS.resetFilter,
}

export default connect(
  () => ({}),
  mapDispatchToProps,
)(SearchFilter)
