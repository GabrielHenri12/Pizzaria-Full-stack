import { Route, Routes } from 'react-router-dom'
import Cart from '../../views/Cart/Cart'
import Home from '../../views/Home/Home'
import Usuario from '../../views/User/Usuario'
import NotFound from '../../views/404/NotFoundPage'
import './Contents.css'

export default () => {
  return (
    <main className='Contents'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Usuario/*" element={<Usuario/>}/>
        <Route path="/carrinho" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  )
}