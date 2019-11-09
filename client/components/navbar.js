import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <div className="navbar-collapse">
      <p id="navWelcome">
        <Link to="/home">cereal for the Not so serious</Link>
      </p>

      {isLoggedIn ? (
        <div>
          <Link to="/home">welcome</Link>
          <a href="#" onClick={handleClick}>
            {' '}
            logout
          </a>
        </div>
      ) : (
        <div className="collapse-navbar-collapse">
          <Link to="/login" className="material-icons">
            login/register
          </Link>
          <Link to="/cart" className="material-icons">
            your cart
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
            ALL ITEMS
          </Link>
          <Link to="/cereals/new" className="icon-bar">
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
          <Link to="the-unknowns" className="icon-bar">
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
