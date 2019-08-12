import * as React from 'react'
import * as styles from './item.scss'

export const StatusEnum = {
  Screen: 'Screen',
  Scheduled: 'Scheduled',
  Explored: 'Explored',
  Hire: 'Hire',
}

export const DashboardItem = ({
  id,
  name,
  role,
  date,
  status,
  onChangeStatus,
}) => {

  const [itemStatus, setItemStatus] = React.useState(status)

  const changeStatus = (id) => ({target: {value}}) => {
    setItemStatus(value)
    onChangeStatus(id, value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.date}>{date}</div>
      <select className={styles.status} value={itemStatus} onChange={changeStatus(id)}>
        <option value={StatusEnum.Screen}>{StatusEnum.Screen}</option>
        <option value={StatusEnum.Scheduled}>{StatusEnum.Scheduled}</option>
        <option value={StatusEnum.Explored}>{StatusEnum.Explored}</option>
        <option value={StatusEnum.Hire}>{StatusEnum.Hire}</option>
      </select>
    </div>

  )
}