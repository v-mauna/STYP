import React, {Component} from 'react'
import {connect} from 'react-redux'
import modifyUser from '../store/user'
import axios from 'axios'

class UserProfile extends Component {
  constructor() {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeTags = this.handleChangeTags.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  handleChangeTags(e) {
    const tagsArr = e.target.value.split(', ')
    this.setState({tags: tagsArr})
  }
  handleSubmit() {
    axios.put(`api/users/${this.props.user.id}`, this.state).then(console.log)
  }
  render() {
    const user = this.props.user

    return (
      <div>
        <div>
          <div>
            <h3 className="tim-note"> Your Profile</h3>
            <br />
            <h4 className="tim-typo">Details</h4>
            <div>
              <div className="form-group">
                <h4>Name</h4>
                <input
                  type="text"
                  placeholder={user.name}
                  name="name"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <h4>Email</h4>
                <input
                  type="text"
                  placeholder={user.email}
                  name="email"
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <br />
              <h4 className="tim-typo">My Preferences</h4>
              <div className="media-body">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="tags"
                    onChange={this.handleChangeTags}
                    rows="6"
                  />
                </div>
              </div>
              <div>
                <span onClick={this.handleSubmit}>Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   console.log(state.userReducer)
//   return {
//     updateUser: state.userReducer.user.updateUser
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     modifyUser: id => dispatch(modifyUser(id))
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
