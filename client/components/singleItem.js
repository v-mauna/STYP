import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneItem} from '../store/item'
import {Link} from 'react-router-dom'
import ItemCard from '../components/itemCard'

class SingleItem extends Component {
  constructor() {
    super()
    this.redirectToCart = this.redirectToCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchOneItem(this.props.match.params.id)
  }

  redirectToCart() {
    this.props.history.push('/cart')
  }

  render() {
    const item = this.props.item
    if (item.name) {
      return (
        <div>
          <ItemCard
            item={item}
            addItem={this.props.addItem}
            redirectToCart={this.props.history.push.bind(this, '/cart')}
          />
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.itemsReducer.singleItem
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchOneItem: id => dispatch(fetchOneItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
