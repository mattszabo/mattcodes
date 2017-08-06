import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { mount } from 'enzyme'
import { expect } from 'chai'
import Header from '../../../src/components/Header/Header'

describe('Header', function() {
  const wrapper = mount(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  it('renders header text', function() {
    expect(wrapper.find('h1').text()).to.eql('mattcodes.')
  })
})
