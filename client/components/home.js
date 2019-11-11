import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ItemCard from './itemCard'
import {fetchAllItems} from '../store/item'

class Home extends React.Component {
  componentDidMount() {
    this.props.getItems()
    console.log('GOT ITEMS')
  }
  render() {
    const {items} = this.props
    const truncatedItems = items.slice(0, 4)
    // Can change to be getting from database
    const imgBackground =
      'https://purewows3.imgix.net/images/articles/2019_07/magic-spoon-fruity-cereal.jpg?auto=format,compress&cs=strip&fit=min&w=728&h=404'

    return (
      <div>
        <div className="container">
          <div
            id="background-image"
            style={{backgroundImage: `url(${imgBackground})`, height: '400px'}}
          />
          <br />

          <div className="row">
            <div id="userhome-allProducts-container">
              <Link id="items-link" to="/items">
                <h2> See All Products</h2>
              </Link>
              <div id="userhome-allProducts">
                {truncatedItems.map(item => {
                  return <ItemCard key={item.id} item={item} />
                })}
              </div>
            </div>
            <br />

            <div id="userhome-bestseller-container">
              <Link id="bestseller-link" to="/bestsellers">
                <h2 className="title">Bestsellers</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.itemsReducer.items
  }
}

const mapDispatchToProps = dispatch => ({
  getItems: () => dispatch(fetchAllItems())
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
