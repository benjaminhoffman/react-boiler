import React from 'react'
import styles from './Header.css'
import PropTypes from 'prop-types'

const Header = ({ tabs, onTabClick }) => {
  return (
    <nav role="navigation">
      <ul className={styles.tabs}>
        {tabs.map(tab => {
          return (
            <li className={styles.tab} onClick={onTabClick} key={tab}>
              {tab}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func.isRequired
}

export default Header
