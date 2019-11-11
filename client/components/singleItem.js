import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneItem} from '../store/item'
import {addItem} from '../store/cart'

class SingleItem extends Component {
  constructor() {
    super()
    this.state = {
      quantity: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  async componentDidMount() {
    await this.props.fetchOneItem(this.props.match.params.id)
  }

  handleChange(evt) {
    let input = evt.target.value
    console.log('current quantity:', input)

    this.setState({
      quantity: input
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    // this.state({
    //   quantity:0
    // })
  }

  render() {
    const item = this.props.item
    console.log(item)
    if (item.name) {
      return (
        <div className="singleItem-card">
          <img className="singleItem-img" src={item.imageUrl} />
          <div className="singleItem-info" />
          <h2>{item.name}</h2>
          <h3>description:</h3>
          <p>{item.description}</p>
          <h4>price: {item.price}</h4>
          <form onSubmit={this.handleSubmit}>
            <input
              name="quantity"
              type="number"
              onChange={this.handleChange}
              value={this.state.value}
              min="0"
              max="400"
            />
            <button id="si-qty" type="submit">
              Submit Quantity
            </button>
            <button
              id="addCart"
              type="submit"
              onClick={() => this.props.addItem(item)}
            >
              add to cart
            </button>
          </form>
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
    fetchOneItem: id => dispatch(fetchOneItem(id)),
    addItem: addedItem => dispatch(addItem(addedItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)
