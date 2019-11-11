/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './home'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const adapter = new Adapter()
enzyme.configure({adapter})
// const middlewares = [thunkMiddleware]
// const mockStore = configureMockStore(middlewares)

describe('<Home/>', () => {
  let home
  // const initialState = {items: []}
  // let store

  beforeEach(() => {
    // store = mockStore(initialState)
    // store.dispatch = () => {}
    home = shallow(<Home />)
  })

  it('exists', () => {
    expect(home).to.exist
  })

  it('render best seller link', () => {
    const bestseller = home.find('#bestseller-link')
    expect(bestseller).to.exist
    expect(bestseller.prop('to')).to.equal('/bestsellers')
  })

  it('render items link', () => {
    const items = home.find('#items-link')
    expect(items).to.exist
    expect(items.prop('to')).to.equal('/items')
  })
})
