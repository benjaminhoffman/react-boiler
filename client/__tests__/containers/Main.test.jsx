import React from 'react'
import { shallow } from 'enzyme'
import Main from '../../containers/Main'

describe('<Main />', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper).toHaveLength(1)
  })
})
