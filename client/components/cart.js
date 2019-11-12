import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import CartItem from './cartItem'
import {restoreCartItemsFromLocalStorage} from '../store/cart'

function countTotal(items) {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  items = JSON.parse(localStorage.getItem('cart'))
  return items.reduce((acc, curVal) => {
    return parseFloat(
      parseFloat(acc) +
        parseFloat(curVal.item.price) * parseFloat(curVal.quantity)
    ).toFixed(2)
  }, 0.0)
}

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    console.log('mounting')
    this.props.restoreCartItemsFromLocalStorage()
  }

  render() {
    let items = this.props.cartItems

    if (items) {
      return (
        <div className="cartPage">
          <div className="wrap cf">
            <div className="heading cf">
              <h1>My Cart</h1>
              <Link to="/cereals" className="continue">
                Continue Shopping
              </Link>
            </div>

            <div className="cart">
              <ul className="cartWrap">
                {items
                  ? items.map((item, indx) => {
                      return (
                        <CartItem
                          style={{display: 'inline-block'}}
                          key={indx}
                          cartitem={item}
                        />
                      )
                    })
                  : null}
              </ul>
            </div>

            {this.props.subtotal ? (
              <div className="subtotal cf">
                <ul>
                  <li className="totalRow">
                    <span className="label">Subtotal: </span>
                    <span className="value">{`${this.props.subtotal}$`}</span>
                  </li>
                </ul>

                <form>
                  <button type="submit">CHECKOUT</button>
                </form>
              </div>
            ) : (
              'Cart is empty'
            )}
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems,
    subtotal: countTotal()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    restoreCartItemsFromLocalStorage: () =>
      dispatch(restoreCartItemsFromLocalStorage())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
