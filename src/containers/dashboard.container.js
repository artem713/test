import { connect } from 'react-redux'
import { Dashboard } from '../components/dashboard'
import { ACTIONS as DASHBOARD_ACTIONS } from '../actions/dashboard'
import { getItems } from '../reducers/dashboard'
import { getFilter } from '../reducers/search-filter'

const mapStateToProps = ({dashboard, searchFilter}) => ({
  items: getItems(dashboard),
  filter: getFilter(searchFilter),
})

const mapDispatchToProps = {
  loadItems: DASHBOARD_ACTIONS.fetchItems,
  changeItemStatus: DASHBOARD_ACTIONS.changeItemStatus,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard)
