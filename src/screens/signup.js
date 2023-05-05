import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add } from '../config/redux/reducer/signupslice'

const Signup = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const signupUser = ()=>{
    dispatch(
      add({
        username: "Hamza Kamelen",
        idno:"01",
        email:"hamza@gmail",
        password:"1234556",
        confirmpassword:"015485654",
      })
      );
      navigate("/")
  }
  return (<>
    <div>SignUp</div>
    <h1>abc</h1>  
<button onClick={signupUser}>Submit</button>
  </>
  )
}

export default Signup