import React from 'react'
import styles from './Header.css'
import PropTypes from 'prop-types'

const Header = ({ tabs, onTabClick }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map(tab => {
        return (
          <div className={styles.tab} onClick={onTabClick} key={tab}>
            {tab}
          </div>
        )
      })}
    </div>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default Header
