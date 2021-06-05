import React, { Component } from 'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'
import { createProject } from "../store/actions/projectActions"

class CreateProject extends Component {
  state = {
    title: " ",
    content: " "
  }
  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  submitForm = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push("/")
  }
  render() {
    const {auth} = this.props
    if(!auth.uid) return <Redirect to="/signin" />
    
    return (
      <div className="container">
        <h3 className="white-text text-darken-3">Create Project</h3>
        <form className="white" onSubmit={this.submitForm}>
          <div className="input-field">
            <label htmlFor="title">Project Title</label>
            <input type="text" id="title" onChange={this.change} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Description</label>
            <textarea id="content" className="materialize-textarea" onChange={this.change}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
