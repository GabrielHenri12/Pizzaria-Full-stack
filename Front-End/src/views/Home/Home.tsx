import { useEffect, useState } from 'react'
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
    const [loadind, setLoadind] = useState<boolean>(false)

    useEffect(() => {
        loadingPage()
    }, []);

    const loadingPage =async ()=>{
        try {
            let response = await api.get('/home')
            setList(response.data);
            setLoadind(true);
        } catch (err) {
            console.log(err)
        }
    }

    function addPizza(id: number) {
        let pizza = { tamanho: 'Grande', quantidade: 1, id }
        api
            .post('/carrinho/adicionar/', pizza)
            .then(response => { alert('Pizza Adicionada')})
            .catch(err => console.log(err))
    };

    return (
        <section className="menu--pizzas">
            <h2 className="title">Sabores</h2>
            <div className="pizza--size">
                <ul className="ul">
                    {loadind === false && <span>Carregando...</span>}
                    {loadind === true && list?.listaPizza.map((item: list) => (
                        <li key={item.id}>
                            <div className="item" id="item">
                                <img src={`/images/${item.img}`} alt="Miniatura das Pizzas" />
                                <span>{item.sabor}</span>
                                <button onClick={e => addPizza(item.id)} className="btn">+ADICIONAR</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}