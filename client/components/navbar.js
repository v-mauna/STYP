import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import PropTypes from 'prop-types'

const Navbar = ({handleClick, isLoggedIn, firstName}) => (
  <div>
    <div className="navbar-collapse">
      <h1 id="navWelcome">
        <Link to="/">Cereal for the not so Serious</Link>
      </h1>

      <div id="nav-Log-Cart">
        {isLoggedIn ? (
          <div className="navbar-items">
            <Link to="/" className="navbar-items">
              <h4>{`Welcome!!!!, ${firstName}`}</h4>
            </Link>
            <a className="navbar-items" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div>
            <Link to="/login" className="navbar-items">
              Login/Register
            </Link>
          </div>
        )}
        <Link to="/cart" className="navbar-items">
          Your Cart
          <img src="https://img.icons8.com/ios-filled/16/000000/shopping-cart.png" />
        </Link>
      </div>
    </div>

    <nav id="sectionsNav">
      <div className="container">
        <div className="navbar-header">
          <Link to="/items" className="icon-bar">
            ALL ITEMS
          </Link>
          <Link to="/new" className="icon-bar">
            NEW
          </Link>
          <Link to="/bestsellers" className="icon-bar">
            BESTSELLERS
          </Link>
          <Link to="/classics" className="icon-bar">
            CLASSICS
          </Link>
          <Link to="/organics" className="icon-bar">
            ORGANICS
          </Link>
          <Link to="/the-unknowns" className="icon-bar">
            THE UNKNOWNS
          </Link>
        </div>
      </div>
    </nav>
    <hr />
  </div>
)

/* CONTAINER */
const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    user: state.user,
    items: state.items,
    firstName: state.user.firstName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  firstName: PropTypes.string
}
