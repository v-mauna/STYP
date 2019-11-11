/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Footer} from '../components'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Footer test', () => {
  let footerWrapper

  beforeEach(() => {
    footerWrapper = shallow(<Footer />)
  })

  it('renders the footer', () => {
    expect(footerWrapper.find('footer')).to.have.lengthOf(1)
  })

  it('renders the footer elements', () => {
    expect(footerWrapper.find('Link')).to.have.lengthOf(8)
    expect(footerWrapper.find('div')).to.have.lengthOf(4)
    expect(footerWrapper.find('hr')).to.have.lengthOf(1)
    expect(footerWrapper.find('ul')).to.have.lengthOf(2)
  })
})
