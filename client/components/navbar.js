import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="navbar-collapse">
      <Link to="/welcome">
        <h1>Shop Till You Pop</h1>
      </Link>
      <p id="navWelcome">welcome</p>
      {isLoggedIn ? (
        <div>
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            {' '}
            Logout
          </a>
        </div>
      ) : (
        <div className="collapse-navbar-collapse">
          <Link to="/login" className="material-icons">
            Login
          </Link>
          <Link to="/signup" className="material-icons">
            Sign Up
          </Link>
          <Link to="/cart" className="material-icons">
            Shopping Cart
          </Link>
        </div>
      )}
    </div>

    <nav
      className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll"
      id="sectionsNav"
    >
      <div className="container">
        <div className="navbar-header">
          <Link to="/allItems" className="icon-bar">
            All Items
          </Link>
          <Link to="/new" className="icon-bar">
            New
          </Link>
          <Link to="/bestsellers" className="icon-bar">
            Bestsellers
          </Link>
          <Link to="/classics" className="icon-bar">
            Classics
          </Link>
          <Link to="/organics" className="icon-bar">
            Organics
          </Link>
          <Link to="/the-unknowns" className="icon-bar">
            The Unknowns
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
    items: state.items
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
