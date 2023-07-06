import { Route, Routes } from 'react-router-dom'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

export default () => {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastrar' element={<Register/>}/>
        </Routes>
    )
}