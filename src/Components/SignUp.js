import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { signUp } from '../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: " ",
    password: " ",
    firstname: " ",
    lastname: " "
  }
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) return <Redirect to="/" />

    return (
      <div className="container">
        <h3 className="white-text text-darken-3">Sign Up</h3>
        <form className="white" onSubmit={this.submitForm}>
          <div className="input-field">
            <label htmlFor="firstname">FirstName</label>
            <input type="text" id="firstname" onChange={this.change} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" onChange={this.change} />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.change} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.change} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">SignUp</button>
          </div>
          <div className="red-text center">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
