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
  const imgBackground =
    'https://beinghealthiest.com/wp-content/uploads/sites/8/2019/01/Breakfast-cereal.jpg'
  return (
    <div>
      <h3>{`Welcome!!!!, ${firstName}`}</h3>
      <div className="container">
        <div className="row">
          <div
            style={{backgroundImage: `url(${imgBackground})`, height: '500px'}}
          >
            <div id="userhome-bestseller-container">
              <Link to="/bestsellers">
                <h2 className="title">Bestsellers</h2>
              </Link>
            </div>
          </div>
          <br />

          <div id="userhome-allProducts-container">
            <Link to="/allitems">
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
