import React from 'react'
import {connect} from 'react-redux'
import {createdUser} from '../store/user'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newUser = this.state
    this.props.createUser(newUser)
    history.push('/')
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <div className="reg-page">
        <img
          className="reg-img"
          src="https://images.unsplash.com/photo-1519248494489-1e9f5586bf10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
        />
        <div className="reg-form">
          <h2>create an account</h2>
          <div id="registerUser">
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
              <label htmlFor="firstName">
                <p>first name</p>
              </label>
              <input
                value={this.state.firstName}
                onChange={this.handleChange}
                name="firstName"
                type="text"
              />
              <label htmlFor="lastName">
                <p>last name</p>
              </label>
              <input
                value={this.state.lastName}
                onChange={this.handleChange}
                name="lastName"
                type="text"
              />
              <label htmlFor="email">
                <p>e-mail</p>
              </label>
              <input
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                type="text"
              />
              <label value={this.state.password} htmlFor="password">
                <p>password</p>
              </label>
              <input
                name="password"
                onChange={this.handleChange}
                type="password"
              />
            </form>
            <button type="submit" onClick={this.handleSubmit}>
              create account
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: newUser => {
      dispatch(createdUser(newUser, ownProps))
      ownProps.history.push('/')
    }
  }
}

export default connect(null, mapDispatchToProps)(Register)
