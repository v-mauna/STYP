import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getAllItems} from '../store/item'

const ItemCard = props => {
  const cereal = props.items
  return (
    <div className="col-md-4" key={cereal.id}>
      <div>
        <div
          className="card card-raised card-background"
          style={{backgroundImage: `url(${cereal.photos[0]})`}}
        >
          <div className="card-content">
            <p className="card-description">
              {cereal.description.length < 50
                ? cereal.description
                : cereal.description.slice(0, 50) + '...'}
            </p>
            <Link
              className="btn btn-danger btn-round"
              to={'/cereals/' + cereal.id}
            >
              <h3 className="card-title">{cereal.name}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllItems: () => dispatch(getAllItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)
