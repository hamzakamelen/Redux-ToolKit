import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from '../../screens/login'
import Home from '../../screens/home'
import Signup from '../../screens/signup'
import Products from '../../screens/product'
import CartScreen from '../../screens/cart'
const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="product" element={<Products />} />
        <Route path="cart" element={<CartScreen />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter