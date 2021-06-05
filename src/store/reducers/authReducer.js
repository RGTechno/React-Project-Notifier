const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login Error")
      return {
        ...state,
        authError: "Login Failed"
      }
    case "LOGIN_SUCCESS":
      console.log("Login Success")
      return {
        ...state,
        authError: null
      }
    case "SIGN_OUT_SUCCESS":
      console.log("SIGNOUT Success")
      return state
    case "SIGN_UP_SUCCESS":
      console.log("SIGNUP Success")
      return {
        ...state,
        authError: null
      }
    case "SIGN_UP_ERR":
      console.log("SIGNUP Error")
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer