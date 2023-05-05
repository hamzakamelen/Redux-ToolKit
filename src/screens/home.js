import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const Data = useSelector((a)=>a)
  console.log(Data.Login)
  console.log(Data.signUp)
  return (
    <div>Home</div>
  )
}

export default Home