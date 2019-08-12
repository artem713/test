import * as React from 'react'
import { DashboardItem } from './components/item'
import { dashboardService } from '../../services/dashboard.service'

export const Dashboard = ({
  items,
  loadItems,
  filter,
  changeItemStatus,
}) => {

  React.useEffect(() => {
    loadItems()
  }, [])

  const [filtered, setFiltered] = React.useState([...items])

  React.useEffect(
    () => setFiltered(dashboardService.filter(items, filter)),
    [items, filter]
  )

  return filtered.length > 0 && filtered.map(item => (
    <DashboardItem {...item} key={item.id} onChangeStatus={changeItemStatus}/>
  ))
}