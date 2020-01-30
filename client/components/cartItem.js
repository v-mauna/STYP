import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchOneItem} from '../store/item'
import {
  removeItem,
  changeQuantity,
  restoreCartItemsFromLocalStorage
} from '../store/cart'

export class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.cartitem.quantity,
      id: this.props.cartitem.item.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    let input = evt.target.value

    this.props.changeQuantity(this.props.cartitem.item.id, input)

    this.setState(prevState => ({
      quantity: input,
      id: prevState.id
    }))
  }

  handleSubmit(evt) {
    evt.preventDefault()
  }

  render() {
    const singleOrderItem = this.props.cartitem.item

    if (singleOrderItem.name) {
      return (
        <li className="cartItems">
          <form>
            <div className="cartItemsInfoWrap">
              <div className="cartSection">
                <img
                  src={singleOrderItem.imageUrl}
                  alt="cereal"
                  className="cartItemImg"
                />
                <div id="cartItemText">
                  <p>Quantity:</p>
                  <input
                    name="quantity"
                    type="number"
                    onChange={this.handleChange}
                    value={this.props.cartitem.quantity}
                    min="0"
                    max="400"
                  />
                  <div className="cartSection removeWrap">
                    <button
                      className="remove"
                      type="submit"
                      onClick={() =>
                        this.props.removeItem(
                          singleOrderItem,
                          this.state.quantity
                        )
                      }
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </li>
      )
    } else {
      return <div>empty</div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    item:
      state.cartReducer.cartItems.find[
        item => item.id === ownProps.cartitem.item.id
      ]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: removed => dispatch(removeItem(removed)),
    changeQuantity: (itemId, quantity) =>
      dispatch(changeQuantity(itemId, quantity))
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartItem)
)
