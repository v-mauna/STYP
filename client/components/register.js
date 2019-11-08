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
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }
  render() {
    return (
      <div>
        <h2>create an account</h2>
        <div id="registerUser">
          <form
            id="reg-form"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
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
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createUser: newUser => dispatch(createdUser(newUser))
  }
}

export default connect(null, mapDispatchToProps)(Register)
