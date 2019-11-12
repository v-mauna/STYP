import React from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'
import ItemCard from './itemCard'
import {withRouter} from 'react-router'

class ItemsList extends React.Component {
  constructor() {
    super()
    this.redirectToCart = this.redirectToCart.bind(this)
  }
  async componentDidMount() {
    await this.props.fetchItems(this.props.categoryName)

    console.log('---props -redirect', this.props)
    console.log('itemstoMap', this.props.items)
  }

  redirectToCart() {
    this.props.history.push('/cart')
  }
  render() {
    const {match, location, history} = this.props
    const items = this.props.itemsReducer.items
    const numberOfItem = this.props.numberOfItem
    let displayItems = items
    if (numberOfItem && numberOfItem > 0) {
      displayItems = items.slice(0, numberOfItem)
    }

    if (items) {
      return (
        <div className="itemsList">
          {displayItems.map(item => {
            return (
              <ItemCard
                key={item.id}
                item={item}
                redirectToCart={this.redirectToCart}
              />
            )
          })}
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapAllCereals = state => ({
  itemsReducer: state.itemsReducer,
  categoryName: 'all'
})

const mapClassics = state => ({
  itemsReducer: state.itemsReducer,
  categoryName: 'classics'
})

const mapBestsellers = state => ({
  itemsReducer: state.itemsReducer,
  categoryName: 'bestsellers'
})

const mapUnknowns = state => ({
  itemsReducer: state.itemsReducer,
  categoryName: 'the unknowns'
})

const mapOrganics = state => ({
  itemsReducer: state.itemsReducer,
  categoryName: 'organic'
})

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: categoryName => dispatch(fetchAllItems(categoryName))
  }
}

export const AllCereals = withRouter(
  connect(mapAllCereals, mapDispatchToProps)(ItemsList)
)
export const Classics = connect(mapClassics, mapDispatchToProps)(ItemsList)
export const Bestsellers = connect(mapBestsellers, mapDispatchToProps)(
  ItemsList
)
export const Unknowns = connect(mapUnknowns, mapDispatchToProps)(ItemsList)
export const Organics = connect(mapOrganics, mapDispatchToProps)(ItemsList)
