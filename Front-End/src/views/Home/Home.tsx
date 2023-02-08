import { useEffect, useState } from 'react'
import CardHome from '../../components/Cards/CardHome';
import api from '../../services/Api'
import './Home.css'

export type list = {
    id: number;
    sabor: string;
    img: string;
    tamanho: string;
    valor: number;
    quantidade: number;
    descricao: string;
}

export default () => {

    const [list, setList] = useState<list[]>();
    const [loadind, setLoadind] = useState<boolean>(false)

    useEffect(() => {
        loadingPage()
    }, []);

    const loadingPage =async ()=>{
        try {
            let response = await api.get('/home')
            setList(response.data.listaPizza);
            setLoadind(true);
        } catch (err) {
            console.log(err)
        }
    }

    function addPizza(id: number) {
        let pizza = { tamanho: 'Grande', quantidade: 1, id }
        api
            .post('/carrinho/adicionar/', pizza)
            .then(() => { alert('Pizza Adicionada')})
            .catch(err => console.log(err))
        return
    };

    return (
        <section className="menu--pizzas">
            <h2 className="title">Sabores</h2>
            <div className="pizza--size">
                <ul className="ul">
                    {loadind === false && <span>Carregando...</span>}
                    {loadind === true && list && list.map((item: list) => (
                        <CardHome item={item} addPizza={addPizza}/>
                    ))}
                </ul>
            </div>
        </section>
    )
}