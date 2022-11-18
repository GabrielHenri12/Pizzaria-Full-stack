import React, { useEffect, useState } from 'react'
import api from '../../BaseApi/BaseUrl'
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

    const [list, setList]: any = useState()

    useEffect(() => {
        api
            .get('/home')
            .then((Response) => setList(Response.data))
            .catch((err) => console.log("Opps ocorreu um erro" + err))
    }, []);

    let listLi = list?.listaPizza.map((item: list) => {
        return (
            <li key={item.id}>
                <div className="item" id="item">
                    <img src={`/images/${item.img}`} alt="Miniatura das Pizzas" />
                    <span>{item.sabor}</span>
                    <a href={`/home/${item.id}`} className="btn">+ADICIONAR</a>
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