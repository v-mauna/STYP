import React from 'react'
import {Link} from 'react-router-dom'
import {AllCereals, Bestsellers} from './itemsList'

export default class Home extends React.Component {
  render() {
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
                    <ItemCard
                      key={item.id}
                      item={item}
                      addItem={this.props.addItem}
                      redirectToCart={this.props.history.push.bind(
                        this,
                        '/cart'
                      )}
                    />
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
              <Bestsellers numberOfItem={4} />
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}
