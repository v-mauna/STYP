import React from 'react'
import {connect} from 'react-redux'
import {fetchAllItems} from '../store/item'

class Home extends React.Component {
  componentDidMount() {
    this.props.getItems()
  }
  render() {
    if (this.props.items.length) {
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

const mapStateToProps = state => {
  return {
    items: state.itemsReducer
  }
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchAllItems())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
