import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import {fetchOneItem} from '../store/item'
import {
  removeItem,
  changeQuantity,
  restoreCartItemsFromLocalStorage
} from '../store/cart'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: this.props.cartitem.quantity,
      id: this.props.cartitem.item.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  // componentDidMount(){
  //     let id = this.props.cartitem.item.id
  //     this.props.fetchOneItem(id)

  //     this.props.restoreCartItemsFromLocalStorage()
  // }

  handleChange(evt) {
    let input = evt.target.value
    console.log('current quantity:', input)
    // console.log(this.state)
    // this.setState((state, props) => {
    //     return {counter: state.counter + props.step};
    //   });

    this.props.changeQuantity(this.state.id, input)
    this.setState({
      quantity: input
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    // this.state({
    //   quantity:0
    // })
  }

  render() {
    const singleOrderItem = this.props.cartitem.item

    console.log('singleitem', singleOrderItem)

    if (singleOrderItem.name) {
      return (
        <li className="items">
          <form>
            <div className="infoWrap">
              <div className="cartSection">
                <div>
                  <img
                    src={singleOrderItem.imageUrl}
                    alt="cerals"
                    className="itemImg"
                  />
                </div>
                <div>
                  <p>Quantity:</p>
                  <input
                    name="quantity"
                    type="number"
                    onChange={this.handleChange}
                    value={this.state.quantity}
                    min="0"
                    max="400"
                  />
                </div>
                <p className="stockStatus"> In Stock</p>
              </div>

              <div className="cartSection removeWrap">
                <button
                  className="remove"
                  onClick={() =>
                    this.props.removeItem(singleOrderItem, this.state.quantity)
                  }
                >
                  REMOVE
                </button>
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
    item: state.cartReducer.cartItems[ownProps.key]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchOneItem: id => dispatch(fetchOneItem(id)),
    removeItem: removed => dispatch(removeItem(removed)),
    changeQuantity: (item, quantity) => dispatch(changeQuantity(item, quantity))
    // restoreCartItemsFromLocalStorage: () => dispatch(restoreCartItemsFromLocalStorage())
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartItem)
)
