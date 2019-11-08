import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(props) {
    console.log('mounting')
  }

  render() {
    return (
      <div className="wrap cf">
        <div className="heading cf">
          <h1>My Cart</h1>
          <a href="#" className="continue">
            Continue Shopping
          </a>
        </div>

        <div className="cart">
          <ul className="cartWrap">
            <li className="items">
              <div className="infoWrap">
                <div className="cartSection">
                  <img
                    src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                    alt=""
                    className="itemImg"
                  />
                  <p className="itemNumber">#QUE-007544-002</p>
                  <h3>Item Name 1</h3>

                  <p>
                    {' '}
                    <input type="text" className="qty" placeholder="3" /> x
                    $5.00
                  </p>

                  <p className="stockStatus"> In Stock</p>
                </div>

                <div className="prodTotal cartSection">
                  <p>$15.00</p>
                </div>
                <div className="cartSection removeWrap">
                  <a href="#" className="remove">
                    x
                  </a>
                </div>
              </div>
            </li>
            <li className="items">
              <div className="infoWrap">
                <div className="cartSection">
                  <img
                    src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg"
                    alt=""
                    className="itemImg"
                  />
                  <p className="itemNumber">#QUE-007544-002</p>
                  <h3>Item Name 1</h3>

                  <p>
                    {' '}
                    <input type="text" className="qty" placeholder="3" /> x
                    $5.00
                  </p>

                  <p className="stockStatus"> In Stock</p>
                </div>

                <div className="prodTotal cartSection">
                  <p>$15.00</p>
                </div>
                <div className="cartSection removeWrap">
                  <a href="#" className="remove">
                    x
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="subtotal cf">
          <ul>
            <li className="totalRow">
              <span className="label">Subtotal</span>
              <span className="value">$35.00</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllOrders: () => dispatch(fetchAllOrders())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart))
