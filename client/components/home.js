import React, {Component} from 'react'
import {connect} from 'react-redux'
import store from '../store/'
import {fetchAllItems} from '../store/item'
import ItemsList from './itemsList'

class Home extends Component {
  componentDidMount() {
    console.log('Mounted')
    console.log('Props', this.props)
    this.props.getItems()
  }
  render() {
    const items = this.props.items
    console.log('items: ', items)
    return (
      <main>
        <div>
          <h2>shop till you pop</h2>
          {/* {items.map(item => (
            <ItemsList key={item.id} items={item} />
          ))} */}
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
