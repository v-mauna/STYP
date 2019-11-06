import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="navbar-collapse">
      <h1>CEREALS FOR YOU</h1>
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
          <Link to="/cereals" className="icon-bar">
            All
          </Link>
          <Link to="/" className="icon-bar">
            New
          </Link>
          <Link to="/" className="icon-bar">
            Classic
          </Link>
          <Link to="/" className="icon-bar">
            Obscurity
          </Link>
          <Link to="/" className="icon-bar">
            Sales
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
    user: state.user
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
