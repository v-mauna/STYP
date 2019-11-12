import React from 'react'
import {Link} from 'react-router-dom'
import {addItem, updateTotal} from '../store/cart'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const ItemCard = props => {
  const item = props.item
  const addItem = props.addItem

  return (
    <div key={item.id}>
      <div>
        <div className="itemsCard">
          <Link to={'/cereals/' + item.id}>
            <img src={item.imageUrl} />
            <h3 className="card-title">{item.name}</h3>
          </Link>
          <p>
            Price: ${item.price}
            <button
              id="addCart"
              type="submit"
              onClick={() => {
                props.addItem(item)
                props.redirectToCart()
              }}
            >
              add to cart
            </button>
          </p>
          <div className="card-content">
            <p className="card-description" />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: addedItem => dispatch(addItem(addedItem))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ItemCard))
