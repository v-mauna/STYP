import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CartItem} from './cartItem'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CartItem test', () => {
  let cartItemWrapper

  beforeEach(() => {
    const cartItemProfile = {
      quantity: 9,
      item: {id: 'a', name: 'b', imageUrl: 'c'}
    }
    cartItemWrapper = shallow(<CartItem cartitem={cartItemProfile} />)
  })

  it('renders the cartItem', () => {
    expect(cartItemWrapper.find({name: 'quantity'}).html()).to.equal(
      '<input type="number" name="quantity" value="9" min="0" max="400"/>'
    )
  })
})
