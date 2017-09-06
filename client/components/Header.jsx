import React from 'react'
import styles from './Header.css'

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

export default Header
