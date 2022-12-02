import React, { useEffect, useState } from 'react'
import api from '../../services/Api'
import './Home.css'

type list = {
    id: number;
    sabor: string;
    img: string;
    tamanho: string;
    valor: number;
    quantidade: number;
    descricao: string;
}

export default () => {

    const [list, setList]: any = useState();
    const [reset, setReset] = useState('reset');

    useEffect(() => {
        api
            .get('/home')
            .then((Response) => setList(Response.data))
            .catch((err) => console.log("Opps ocorreu um erro" + err))
    }, [reset]);

    function addPizza(id: number){
        let pizza = {tamanho: 'Grande', quantidade: 1, id}
        api
            .post('/carrinho/adicionar/', pizza)
            .then(response => {alert('Pizza Adicionada'), setReset('resetado')})
            .catch(err => console.log(err))
    };

    let listLi = list?.listaPizza.map((item: list) => {
        return (
            <li key={item.id}>
                <div className="item" id="item">
                    <img src={`/images/${item.img}`} alt="Miniatura das Pizzas" />
                    <span>{item.sabor}</span>
                    <button onClick={e => addPizza(item.id)} className="btn">+ADICIONAR</button>
                </div>
            </li>
        )
    })

    return (
        <section className="menu--pizzas">
            <h2 className="title">Sabores</h2>
            <div className="pizza--size">
                <ul className="ul">
                    {listLi}
                </ul>
            </div>
        </section>
    )
}