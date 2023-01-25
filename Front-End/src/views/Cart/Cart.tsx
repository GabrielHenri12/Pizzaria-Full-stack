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
    const [cartItem, setItens] = useState<cart[]>()
    const [loadind, setLoadind] = useState<boolean>(false)
    const [Err, setErr] = useState<boolean>(false);

    useEffect(() => {
        loadingPage()
    }, []);

    const loadingPage = async () => {
        try {
            let response = await api.get('/carrinho')
            setItens(response.data.mapCart);
            setLoadind(true);
        } catch (err) {
            setErr(true);
            setLoadind(true);
            console.log(err)
        }
    }
    
    const deletItem = (id: number) => {
        api
            .delete(`/carrinho/${id}/deletar`)
            .then(()=>loadingPage())
            .catch(err=>console.log(err))       
    }
    
    return (
        <div className='cart'>
            <h2>Carrinho</h2>
            <ul>
                {Err && <span>recarregue a página!</span>}
                {loadind === false && <span>Carregando...</span>}
                {loadind === true && cartItem &&
                 cartItem.map((item: cart) => {
                    let value = item.quantidade * item.valor
                    return (
                        <li key={item.id_pedido}>
                            <span>{item.sabor} </span>
                            <span>{item.tamanho} </span>
                            <span id='quantidade'>{item.quantidade}</span> 
                            <span>R${value}</span> 
                            <img src={Delet} onClick={_ => deletItem(item.id_pedido)} />
                        </li>
                    )
                })}
            </ul>
            <button className='button'>Finalizar Compra</button>
        </div>
    )
}