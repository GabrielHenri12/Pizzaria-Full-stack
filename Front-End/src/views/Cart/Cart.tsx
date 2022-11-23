import React from 'react'
import api from '../../services/Api'
import './Cart.css'

export default () => {

    function verCarrinho(){
        api
            .get('/carrinho')
            .then(response => console.log(response.data))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Carrinho</h1>
            <button onClick={verCarrinho}>Carregar Carrinho</button>
        </div>
    )
}