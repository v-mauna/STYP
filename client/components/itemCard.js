import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard = props => {
  const {item: cereal, showDescription} = props
  return (
    <div id="item-card" key={cereal.id}>
      <div>
        <Link to={'/cereals/' + cereal.id}>
          <img className="item-image" src={cereal.imageUrl} />
          <h3 className="card-title">{cereal.name}</h3>
          {showDescription ? (
            <p className="card-description">
              {cereal.description.length < 30
                ? cereal.description
                : cereal.description.slice(0, 30) + '...'}
            </p>
          ) : (
            <div />
          )}
        </Link>
      </div>
    </div>
  )
}

export default ItemCard
