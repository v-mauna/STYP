import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleItem} from '../store/item'

class SingleItem extends Component {
  componentDidMount() {
    this.props.getItem(this.props.paramId)
  }
  addToCart() {}
  render() {
    const item = this.props.item
    return (
      <main>
        <div>
          <h3>{item.name}</h3>
          <img height="100px" width="100px" src={item.imageUrl} />
          <h3>description:</h3>
          <p>{item.description}</p>
          <h4>price: {item.price}</h4>
          <button type="button" onClick={this.addToCart}>
            add to cart
          </button>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    item: state.singleItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItem: id => dispatch(fetchSingleItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
