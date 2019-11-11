import React from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'
import ItemCard from './itemCard'

class ItemsList extends React.Component {
  componentDidMount() {
    this.props.fetchAllItems()
  }
  render() {
    const items = this.props.items
    if (items) {
      return (
        <div>
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

const mapStateToProps = state => {
  //console.log(state.itemsReducer.items)
  return {
    items: state.itemsReducer.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllItems: () => dispatch(fetchAllItems())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList)
