import React from 'react'

const Contact = ({ onContact }) => {
    return (
      <div>
        Please complete this form:
        <form onSubmit={onContact}>
          <label htmlFor='name'>
            Name:
            <input type='text'
              name='name' />
            <input type='submit' value='Submit' />
          </label>
        </form>
      </div>
    )
}

export default Contact
