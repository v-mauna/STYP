import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {firstName} = props

  // Can change to be getting from database
  const imgSrc =
    'https://www.irishtimes.com/polopoly_fs/1.3382069.1518442333!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'

  return (
    <div className="userHome-pg">
      <h3>{`Welcome, ${firstName}`}</h3>
      <div className="container">
        <div className="row">
          <div className="userHome-bgImg">
            <div id="userhome-bestseller-container">
              <Link to="/bestsellers">
                <h2 className="title">Bestsellers</h2>
              </Link>
            </div>
          </div>
          <br />

          <div id="userhome-allProducts-container">
            <Link to="/cereals">
              <h4> See All Products</h4>
              <img src={imgSrc} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/*CONTAINER*/
const mapState = state => {
  return {
    firstName: state.user.firstName
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string
}
