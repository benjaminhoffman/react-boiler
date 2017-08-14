import React, { Component } from 'react'
import styles from './Header.css'

class Header extends Component {
  constructor (props) {
    super (props)
  }

  componentDidMount () {
    console.log('Header mounted')
  }

  render () {
    console.log(styles)
    return (
      <div className={styles.tabs}>
        {this.props.tabs.map(tab => {
          return <div
            className={styles.tab}
            onClick={this.props.onTabClick}
            key={tab}>
              {tab}
          </div>
        })}
      </div>
    )
  }
}

export default Header
