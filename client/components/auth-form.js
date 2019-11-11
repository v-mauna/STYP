import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <img
        className="auth-img"
        src="https://images.unsplash.com/photo-1517456944721-229d38679dfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
      />
      <form className="signUpBox" onSubmit={handleSubmit} name={name}>
        <div>
          <h3> hey.</h3>
          <p>want to know something cool? </p>
          <p>
            if you create an account, you'll have access to insider info and
            quick access to your previous orders and a streamlined checkout
            process.
          </p>
          <Link to="/register">
            <button type="button" formAction="/register">
              register
            </button>
          </Link>
          <p>
            <img
              id="g-img"
              src="https://img.icons8.com/material/20/000000/google-logo--v1.png"
            />
            <a className="loginLinks" href="/auth/google">
              sign up with Google
            </a>
          </p>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>

      <div className="loginBox">
        <form className="login-form form" onSubmit={handleSubmit} name={name}>
          <div>
            <h3> hi there.</h3>
            <p>welcome back. sign into your account here:</p>
            <label htmlFor="email">
              <p>e-mail</p>
            </label>
            <input name="email" type="text" />
            {/* </div>
         <div> */}
            <label htmlFor="password">
              <p>password</p>
            </label>
            <input name="password" type="password" />
          </div>
          <div>
            <button type="submit">login</button>
            <p>
              <a className="loginLinks" href="/auth/google">
                <img
                  id="g-img"
                  src="https://img.icons8.com/material/20/000000/google-logo--v1.png"
                />
                sign in with Google
              </a>
            </p>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
      ownProps.history.push('/')
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
