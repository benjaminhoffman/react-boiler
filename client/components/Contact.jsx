import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  render () {
    const { onContact } = this.props
    const { name } = this.state
    return (
      <div>
        Please complete this form:
        <form onSubmit={(e) => onContact(e, this.state)}>
          <label htmlFor='name'>
            Name:
            <input type='text' name='name' value={name} onChange={this.handleChange} />
            <input type='submit' value='Submit' />
          </label>
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  }
}

Contact.displayName = 'Contact'

Contact.propTypes = {
  onContact: PropTypes.func.isRequired
}

export default Contact
