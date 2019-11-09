import React from 'react'

const CheckoutItem = props => {
  const cartItem = props.cartItem
  const item = cartItem.item

  return (
    <div className="ci">
      <span>{item.name}</span>
      <div className="ciContent">
        <img className="ci-img" src={item.imageUrl} />
        <div className="ciInfo">
          <p>Quanity: {item.quanity}</p>
          <p>Price: {`${props.cartItem * item.quantity}`}</p>
        </div>
      </div>
    </div>
  )
}

export default CheckoutItem
