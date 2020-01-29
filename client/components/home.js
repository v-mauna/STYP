import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1>S.T.Y.P.</h1>
        <h2>Cereal for the not so serious</h2>
        <Link to="/cereals">
          <button type="button" className="shop-btn">
            SHOP NOW
          </button>
        </Link>
      </div>
    )
  }
}
