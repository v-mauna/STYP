import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'
import ItemsList from './itemsList'

class Home extends React.Component {
  componentDidMount() {
    this.props.getItems()
  }
  render() {
    return (
      <main>
        <div>
          <h2>shop till you pop</h2>
          {/* {this.props.items.map((item) => (
            <ItemsList key={item.id} item={item} />
          ))} */}
        </div>
        <div />
      </main>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchAllItems())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
