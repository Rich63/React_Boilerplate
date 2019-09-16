import { shallow } from 'enzyme'
import React from 'react'

import { Header } from '../../../components/pages/Header'

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />)
  expect(wrapper).toMatchSnapshot()

  expect(wrapper.find('h1').text()).toBe('Boilerplate_React_App')
})

test('should call startLogout on button click', () => {
  const startLogout = jest.fn()
  const wrapper = shallow(<Header startLogout={ startLogout } />)
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
})
