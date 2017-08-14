import React, { Component } from 'react'
import Header from './Header.jsx'
import Home from './Home'
import Contact from './Contact'
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
    return (
      <div className={styles.body}>
        <Header
          tabs={this.state.tabs}
          activeTab={this.state.activeTab}
          onTabClick={this.onTabClick}
          />
        {this.state.activeTab === 'Home' && <Home />}
        {this.state.activeTab === 'Contact' && <Contact onContact={this.onContact} />}
      </div>
    )
  }

  onTabClick (e) {
    this.setState({
      activeTab: e.target.innerText
    })
  }
  onContact (e) {
    debugger
    e.preventDefault()
    console.log(e.target.value)
  }
}

export default Main
