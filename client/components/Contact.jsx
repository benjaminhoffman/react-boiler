import React, { Component, PropTypes } from 'react'

class Contact extends Component {
  static defaultProps = {
    name: 'Ben'
  }
  static propTypes = {
    onContact: PropTypes.func.isRequired
  }

  state = {
    name: this.props.name
  }

  render() {
    const { onContact } = this.props
    const { name } = this.state
    return (
      <section role="region">
        Please complete this form:
        <form role="form" onSubmit={e => onContact(e, this.state)}>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </label>
        </form>
      </section>
    )
  }

  handleChange = e => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  }
}

Contact.displayName = 'Contact'

export default Contact
