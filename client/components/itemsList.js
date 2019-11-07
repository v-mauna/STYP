import React from 'react'
import {Link} from 'react-router-dom'

class AllCereals extends React.Component {
  componentDidMount() {
    this.props.getCereals()
  }
  render() {
    return (
      <div>
        <Link to={`/items/${props.item.id}`}>
          <h5>{props.item.name}</h5>
        </Link>
        <button type="button" onClick="">
          Add to Cart
        </button>
        <img height="100px" width="100px" src={props.item.imageUrl} />
      </div>
    )
  }
}

export default ItemsList
