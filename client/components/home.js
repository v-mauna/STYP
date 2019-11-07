import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'
import ItemsList from './itemsList'

class Home extends Component {
  componentDidMount() {
    this.props.getItems()
  }
  render() {
    return (
      <main>
        <div>
          <h2>shop till you pop</h2>
          {this.props.items.map(item => (
            <ItemsList key={item.id} items={item} />
          ))}
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(fetchAllItems())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
