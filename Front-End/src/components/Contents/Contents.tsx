import { Route, Routes } from 'react-router-dom'
import Cart from '../../views/Cart/Cart'
import Home from '../../views/Home/Home'
import Login from '../../views/User/Login'
import Register from '../../views/User/Register'
import NotFound from '../../views/404/NotFoundPage'
import './Contents.css'

export default () => {
  return (
    <main className='Contents'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/carrinho" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  )
}