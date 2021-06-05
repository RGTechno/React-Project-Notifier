import React from 'react'
import { NavLink } from "react-router-dom"

function SignedOutLinks() {
  return (
    <div>
      <ul className="right">
        <li><NavLink to="/signup">SignUp</NavLink></li>
        <li><NavLink to="/signin">SignIn</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedOutLinks
