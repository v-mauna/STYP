import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneItem} from '../store/item'
import {Link} from 'react-router-dom'
import ItemCard from '../components/itemCard'

class SingleItem extends Component {
  componentDidMount() {
    this.props.fetchOneItem(this.props.match.params.id)
  }

  render() {
    const item = this.props.item
    if (item.name) {
      return (
        <div>
          <ItemCard item={item} addItem={this.props.addItem} />
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
