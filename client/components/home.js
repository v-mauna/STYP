import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllItems} from '../store/item'
import ItemCard from './itemCard'

class Home extends React.Component {
  async componentDidMount() {
    await this.props.fetchItems(this.props.categoryName)
  }

  render() {
    const {items} = this.props
    const truncatedItems = items.slice(0, 4)
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
              <Link id="items-link" to="/cereals">
                <h2> See All Products</h2>
              </Link>
              <div id="userhome-allProducts">
                {truncatedItems.map(item => {
                  return (
                    <div key={item.id}>
                      <Link to={`/cereals/${item.id}`}>
                        <img key={item.id} src={item.imageUrl} />
                        <p>{item.name}</p>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
            <br />

            <div id="userhome-bestseller-container">
              <Link id="bestseller-link" to="/bestsellers">
                <h2 className="title">Bestsellers</h2>
              </Link>
              <div id="userhome-bestsellers" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  items: state.itemsReducer.items,
  categoryName: 'all'
})

const mapDispatchToProps = dispatch => ({
  fetchItems: categoryName => dispatch(fetchAllItems(categoryName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
