import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Cart} from '../components/cart'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Cart test', () => {
  let cartWrapper

  beforeEach(() => {
    const cartItemsProfile = [
      {quantity: 9, item: {id: 'a', name: 'b', imageUrl: 'c'}},
      {quantity: 9, item: {id: 'a', name: 'b', imageUrl: 'c'}}
    ]
    cartWrapper = shallow(
      <Cart
        cartItems={cartItemsProfile}
        subtotal={10.99}
        restoreCartItemsFromLocalStorage={() => {}}
      />
    )
  })

  it('renders the carts  elements', () => {
    expect(cartWrapper.find('.cartWrap').children()).to.have.lengthOf(2)
  })
})
