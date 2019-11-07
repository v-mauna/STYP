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

  componentDidMount() {
    this.props.fetchOneItem(this.props.match.params.id)
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

    if (item.name) {
      return (
        <main>
          <div>
            <h3>{item.name}</h3>
            <img height="100px" width="100px" src={item.imageUrl} />
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
              <button type="submit">Submit Quantity</button>
            </form>
            <button type="submit" onClick={() => this.props.addItem(item)}>
              add to cart
            </button>
          </div>
        </main>
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
