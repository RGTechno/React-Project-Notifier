import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import { signIn } from "../store/actions/authActions"

class SignIn extends Component {
  state = {
    email: " ",
    password: " "
  }
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError,auth } = this.props
    if(auth.uid) return <Redirect to="/" />
    
    return (
      <div className="container">
        <h3 className="white-text text-darken-3">Sign In</h3>
        <form className="white" onSubmit={this.submitForm}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.change} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.change} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Login</button>
          </div>
          <div className="red-text">
            {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
