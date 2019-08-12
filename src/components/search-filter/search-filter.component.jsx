import * as React from 'react'

import * as styles from './search-filter.scss'
import { useDebounce } from '../../utils/use-debounce'

const defaultDelayInMs = 500

export const SearchFilter = ({
  search,
  reset,
}) => {
  const [query, setQuery] = React.useState('')
  const debouncedQuery = useDebounce(query, defaultDelayInMs)

  React.useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery)
    }
  }, [debouncedQuery])

  const handleChange = ({target: {value}}) => {
    setQuery(value)

    if (!value) {
      reset()
    }
  }
  const handleReset = () => {
    setQuery('')
    reset()
  }

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='search...'
        value={query}
        onChange={handleChange}
        className={styles.field}
      />
      <button className={styles.reset} onClick={handleReset}>reset</button>
    </div>
  )
}