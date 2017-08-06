import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Header from '../../../src/components/Header/Header'

describe('Header', function() {
  const wrapper = mount(<Header />)
  it('renders header text', function() {
    expect(wrapper.find('.header').text()).to.eql('mattcodes.')
  })
})
