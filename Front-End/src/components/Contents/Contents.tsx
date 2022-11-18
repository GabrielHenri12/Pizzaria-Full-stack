import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../../views/Cart/Cart'
import Home from '../../views/Home/Home'
import Login from '../../views/User/Login'
import Register from '../../views/User/Register'
import './Contents.css'

export default () => {
  return (
    <main className='Contents'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Register/>}/>
        <Route path='/carrinho' element={<Cart/>}/>
      </Routes>
    </main>
  )
}