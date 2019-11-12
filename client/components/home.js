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
          <div className="homeRow">
            <div id="home-allProducts-container">
              <Link id="items-link" to="/cereals">
                <h2> See All Products</h2>
              </Link>
              <div id="home-allProducts">
                <AllCereals numberOfItem={4} />
              </div>
            </div>
          </div>
          <br />

          <div className="homeRow">
            <div id="home-bestsellers-container">
              <Link id="bestseller-link" to="/bestsellers">
                <div>
                  <h2 className="home-bestsellers">Bestsellers</h2>
                </div>
              </Link>
              <div id="home-bestsellers-link" />
              <Bestsellers numberOfItem={4} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
