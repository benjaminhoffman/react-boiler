import React, { Component } from 'react'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Home from '../components/Home'
import styles from './Main.css'

class Main extends Component {
  constructor (props) {
    super (props)
    this.state = {
      tabs: ['Home', 'Contact'],
      activeTab: 'Home'
    }
    this.onTabClick = this.onTabClick.bind(this)
    this.onContact = this.onContact.bind(this)
  }

  render () {
    const { tabs, activeTab } = this.state

    return (
      <div className={styles.body}>
        <Header
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={this.onTabClick}
          />
        {activeTab === 'Home' && <Home />}
        {activeTab === 'Contact' && <Contact onContact={this.onContact} />}
      </div>
    )
  }

  onTabClick (e) {
    this.setState({
      activeTab: e.target.innerText
    })
  }

  onContact (e, state) {
    e.preventDefault()
    console.log(state)
  }
}

export default Main
