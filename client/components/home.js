import React from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'

class Home extends React.Component {
  async componentDidMount() {
    await this.props.fetchItems(this.props.categoryName)
  }
  render() {
    if (this.props.items.length > 0) {
      return (
        <main>
          <h2>shop till you pop</h2>
          <div>
            {this.props.items.map(item => <p key={item.id}>{item.name}</p>)}
          </div>
          <div />
        </main>
      )
    } else {
      return <div />
    }
  }
}

const mapStateToProps = state => ({
  items: state.itemsReducer,
  categoryName: 'all'
})

const mapDispatchToProps = dispatch => ({
  fetchItems: categoryName => dispatch(fetchAllItems(categoryName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
