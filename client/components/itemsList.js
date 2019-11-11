import React from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'
import ItemCard from './itemCard'

class ItemsList extends React.Component {
  async componentDidMount() {
    await this.props.fetchItems(this.props.categoryName)
  }
  render() {
    const items = this.props.items
    if (items.length > 0) {
      return (
        <div className="itemsList">
          {items.map(item => {
            return <ItemCard key={item.id} item={item} />
          })}
        </div>
      )
    } else {
      return <div />
    }
  }
}

const mapAllCereals = state => ({
  items: state.itemsReducer,
  categoryName: 'all'
})

const mapClassics = state => ({
  items: state.itemsReducer,
  categoryName: 'classics'
})

const mapBestsellers = state => ({
  items: state.itemsReducer,
  categoryName: 'bestsellers'
})

const mapUnknowns = state => ({
  items: state.itemsReducer,
  categoryName: 'the unknowns'
})

const mapOrganics = state => ({
  items: state.itemsReducer,
  categoryName: 'organic'
})

const mapDispatchToProps = dispatch => {
  return {
    fetchItems: categoryName => dispatch(fetchAllItems(categoryName))
  }
}

export const AllCereals = connect(mapAllCereals, mapDispatchToProps)(ItemsList)
export const Classics = connect(mapClassics, mapDispatchToProps)(ItemsList)
export const Bestsellers = connect(mapBestsellers, mapDispatchToProps)(ItemsList)
export const Unknowns = connect(mapUnknowns, mapDispatchToProps)(ItemsList)
export const Organics = connect(mapOrganics, mapDispatchToProps)(ItemsList)
