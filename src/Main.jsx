import React, { Component } from 'react'
import Header from './Header.jsx'
import Home from './Home'
import Contact from './Contact'

class Main extends Component {
  constructor (props) {
    super (props)
    this.state = {
      tabs: ['Home', 'Contact'],
      activeTab: 'Home'
    }
    this.onTabClick = this.onTabClick.bind(this)
  }

  render () {
    return (
      <div>
        <Header
          tabs={this.state.tabs}
          activeTab={this.state.activeTab}
          onTabClick={this.onTabClick}
          />
        {this.state.activeTab === 'Home' && <Home />}
        {this.state.activeTab === 'Contact' && <Contact />}
      </div>
    )
  }

  onTabClick (e) {
    this.setState({
      activeTab: e.target.innerText
    })
  }
}

export default Main
