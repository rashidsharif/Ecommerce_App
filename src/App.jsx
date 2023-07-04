import React from 'react'

import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductList from './pages/ProductList'
import Home from './pages/Home'
import {Routes, Route } from 'react-router-dom'
import Product from './pages/Product'




const App = () => {
  return (
    <>
   
    <Routes>

      <Route exact path='/' element={<Home/>} />
      <Route  path='/register' element={<Register/>} />
      <Route  path='/login' element={<Login/>} />
      <Route  path='/cart' element={<Cart/>} />
      <Route  path='/product' element={<ProductList/>} />
   
    </Routes>

    </>
  )
}

export default App
