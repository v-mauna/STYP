import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup} from './components'
import UserHome from './components/user-home'
import Home from './components/home'
import Register from './components/register'
import ErrorPage from './components/error-page'
import {me} from './store'
import {
  AllCereals,
  Classics,
  Bestsellers,
  Unknowns,
  Organics
} from '../client/components/itemsList'
import SingleItem from '../client/components/singleItem'
import Cart from '../client/components/cart'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/cereals/" component={AllCereals} />
        <Route exact path="/cereals/:id" component={SingleItem} />
        <Route exact path="/bestsellers" component={Bestsellers} />
        <Route exact path="/classics" component={Classics} />
        <Route exact path="/organics" component={Organics} />
        <Route exact path="/the-unknowns" component={Unknowns} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/userHome" component={UserHome} />
            <Route path="*" component={ErrorPage} />
          </Switch>
        )}

        {/* Displays our Login component as a fallback */}
        <Route path="*" component={ErrorPage} />
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
