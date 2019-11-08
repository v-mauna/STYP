import React from 'react'
import {Link} from 'react-router-dom'

const ItemCard = props => {
  const cereal = props.item
  return (
    <div key={cereal.id}>
      <div>
        <div
          className="card card-raised card-background"
          style={{backgroundImage: `url(${cereal.imageUrl})`}}
        >
          <div className="card-content">
            <p className="card-description">
              {cereal.description.length < 50
                ? cereal.description
                : cereal.description.slice(0, 50) + '...'}
            </p>
            <Link to={'/cereals/' + cereal.id}>
              <h3 className="card-title">{cereal.name}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
