/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './home'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
// import ReactRouterEnzymeContext from 'react-router-enzyme-context'

const adapter = new Adapter()
enzyme.configure({adapter})
const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('<Home/>', () => {
  let home
  const initialState = {itemsReducer: {items: []}}
  let store

  // https://github.com/airbnb/enzyme/issues/1002 explain why .dive.dive()
  beforeEach(() => {
    store = mockStore(initialState)
    const options = new ReactRouterEnzymeContext()
    store.dispatch = () => {}
    home = shallow(<Home store={store} />, options.get())
      .dive()
      .dive()
  })

  it('exists', () => {
    expect(home.exists()).to.equal(true)
  })

  it('render items link', () => {
    const items = home.find('#items-link')
    expect(items.exists()).to.equal(true)
  })

  it('render bestsellers link', () => {
    const bestseller = home.find('#bestseller-link')
    expect(bestseller.exists()).to.equal(true)
    expect(bestseller.prop('to')).to.equal('/bestsellers')
  })
})
