import React from 'react'
import {connect} from 'react-redux'
import {checkingOut} from '../store/cart'
import {restoreCartItemsFromLocalStorage} from '../store/cart'

function countTotal(items) {
  return items.reduce((acc, curVal) => {
    return parseFloat(
      parseFloat(acc) +
        parseFloat(curVal.item.price) * parseFloat(curVal.quantity)
    ).toFixed(2)
  }, 0.0)
}

function countQuantity(items) {
  return items.reduce((acc, curVal) => {
    return (acc += curVal.item.quantity)
  }, 0)
}

const initialState = {
  total: 0,
  recipientFirstName: '',
  recipientLastName: '',
  recipientemail: '',
  totalPrice: 0,
  items: []
}

class CheckoutForm extends React.Component {
  constructor() {
    super()
    this.state = initialState
    this.redirect = this.redirect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  redirect() {
    this.props.history.push('/home')
  }

  handleChange() {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(order) {
    this.props.checkingOut(order)
    this.redirect()
  }

  componentDidMount() {
    this.props.restoreCartItemsFromLocalStorage()
    this.setState({
      ...state,
      totalPrice: this.props.subtotal,
      quantity: this.props.quantity,
      items: this.props.cartItems
    })
    // this.state.totalPrice = this.props.subtotal
    // this.state.quantity = this.props.quantity
    // this.state.items = this.props.cartItems
  }

  render() {
    return (
      <form
        className="checkout-form"
        onSubmit={() => this.handleSubmit(this.state)}
      >
        <div className="form-item">
          <label name="firstName">First Name:</label>
          <input
            name="recipientFirstName"
            value={this.state.recipientFirstName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-item">
          <label name="lastName">Last Name:</label>
          <input
            name="recipientLastName"
            value={this.state.recipientLastName}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-item">
          <label name="email">Email:</label>
          <input
            name="recipientemail"
            type="email"
            value={this.state.recipientemail}
            onChange={this.handleChange}
            required
          />
        </div>
        {/* <div className="form-item">
          <label name="phoneNumber">Phone Number:</label>
          <input
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            required
          />
        </div> */}
        {/* <div className="form-item">
          <label name="streetAddress">Street Address:</label>
          <input
            name="streetAddress"
            value={state.streetAddress}
            onChange={handleChange}
          />
        </div> */}
        {/* <div className="form-item">
          <label name="city">City:</label>
          <input
            name="city"
            value={state.city}
            onChange={handleChange}
            required
          />
          <label name="state">State:</label>
          <input
            name="state"
            value={state.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-item">
          <label name="zipcode">Zipcode:</label>
          <input
            name="zipcode"
            value={state.zipcode}
            onChange={handleChange}
            required
          />
        </div> */}

        <button type="submit">Place Order</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer.cartItems,
    subtotal: countTotal(state.cartReducer.cartItems),
    quantity: countQuantity(state.cartReducer.cartItems)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkingOut: order => dispatch(checkingOut(order)),
    restoreCartItemsFromLocalStorage: () =>
      dispatch(restoreCartItemsFromLocalStorage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm)
