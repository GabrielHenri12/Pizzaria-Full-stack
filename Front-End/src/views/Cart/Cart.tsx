import { useEffect, useState } from 'react'
import api from '../../services/Api'
import Delet from '../../assets/delete.png'
import './Cart.css'

type cart = {
    id_pedido: number
    tamanho: string,
    quantidade: number,
    sabor: string,
    valor: number,
    img: string
}

export default () => {
    const [cartItem, setItens]: any = useState()
    const [reset, setReset] = useState('reset');
    console.log(reset)

    useEffect(() => {
        api
            .get('/carrinho')
            .then(response => setItens(response.data))
            .catch(err => console.log(err))
        
    }, [reset]);

    function deletItem(id: number) {
        api
            .delete(`/carrinho/${id}/deletar`)
            .then(response => setReset(response.data))
            .catch(err => console.log(err))
    }

    let listLi = cartItem?.mapCart.map((item: cart) => {
        let value = item.quantidade * item.valor
        return (
            <li key={item.id_pedido}>|
                {item.sabor} |
                {item.tamanho} |
                {item.quantidade} |
                {value} |
                <img src={Delet} onClick={e => deletItem(item.id_pedido)} />
            </li>
        )
    })
    console.log(cartItem)
    return (
        <div>
            <h1>Carrinho</h1>
            <ul>
                {listLi}
            </ul>
            <button onClick={e => setReset('')}>teste</button>
        </div>
    )
}