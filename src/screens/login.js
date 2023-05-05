import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../config/redux/reducer/loginslice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginUser = ()=>{
    dispatch(
      add({
        email:"hamza@gmail.com",
        password:"12345"
      })
    )
    navigate("/home");
  }
  return (
<>
<div>Login</div>
<button onClick={loginUser}>Submit</button>
</>
  )
}

export default Login
