import CardHome from '../../components/Cards/CardHome';
import api from '../../services/Api'
import './Home.css'
import { ProdutoType } from '../../Types/Produto';
import { useQuery } from 'react-query';
import { busqueTodosProdutos } from '../../Controller/ProdutoController';
import { dataType } from '../../Types/DataTypes';

export default () => {
    const { data, isLoading, isError, error }  = useQuery<dataType>('products', busqueTodosProdutos, {
        staleTime: 5 * 60 * 1000, // 5 minutos
        cacheTime: 30 * 60 * 1000 // 30 minutos
    });

    if (isLoading) {
        return <span>Carregando...</span>
    };
    
    function addPizza(id: number) {
        let pizza = { tamanho: 'Grande', quantidade: 1, id }
        api
            .post('/carrinho/adicionar/', pizza)
            .then(() => { alert('Pizza Adicionada') })
            .catch(err => console.log(err))
        return
    };

    return (
        <section className="menu--pizzas">
            <h2 className="title">Sabores</h2>
            <div className="pizza--size">
                <ul className="ul">
                    {data?.data.value.map((item: ProdutoType) => (
                        <CardHome item={item} addPizza={addPizza} />
                    ))}
                </ul>
            </div>
        </section>
    )
}