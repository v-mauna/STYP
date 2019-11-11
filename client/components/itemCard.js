import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard = props => {
  const cereal = props.item
  return (
    <div key={cereal.id}>
      <div>
        <div className="itemsCard">
          <Link to={'/cereals/' + cereal.id}>
            <img src={cereal.imageUrl} />
            <h3 className="card-title">{cereal.name}</h3>
          </Link>
          <p>
            Price: ${cereal.price}
            <button
              id="addCart"
              type="submit"
              onClick={() => props.addItem(cereal)}
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

export default ItemCard
