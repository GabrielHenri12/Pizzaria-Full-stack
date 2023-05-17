import { ProdutoType } from "../../Models/Produto"
import "./CardHome.css"

type PropsType = {
    item: ProdutoType,
    addPizza(id:number): void
}

export default (props: PropsType) => {
    return (
        <li key={props.item.id}>
            <div className="item" id="item">
                <img src={`/images/${props.item.img}`} alt="Miniatura das Pizzas" />
                <span>{props.item.nome}</span>
                <button onClick={e => props.addPizza(props.item.id)} className="btn">+ADICIONAR</button>
            </div>
        </li>
    )
}