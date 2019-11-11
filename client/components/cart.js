import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from './cartItem'
import {restoreCartItemsFromLocalStorage} from '../store/cart'
import {withRouter} from 'react-router-dom'

function countTotal(items) {
  return items.reduce((acc, curVal) => {
    return parseFloat(
      parseFloat(acc) +
        parseFloat(curVal.item.price) * parseFloat(curVal.quantity)
    ).toFixed(2)
  }, 0.0)
}

export class Cart extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount(props) {
    console.log('mounting')
    this.props.restoreCartItemsFromLocalStorage()
  }

  render() {
    let items = this.props.cartItems

    if (items) {
      return (
        <div className="wrap cf">
          <div className="heading cf">
            <h1>My Cart</h1>
            <Link to="/home" className="continue">
              Continue Shopping
            </Link>
          </div>

          <div className="cart">
            <ul className="cartWrap">
              {items
                ? items.map((item, indx) => {
                    return <CartItem key={indx} cartitem={item} />
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
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems,
    subtotal: countTotal(state.cartReducer.cartItems)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    restoreCartItemsFromLocalStorage: () =>
      dispatch(restoreCartItemsFromLocalStorage())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
