import { list } from "../../views/Home/Home"
import "./CardHome.css"

type PropsType = {
    item: list,
    addPizza(id:number): void
}

export default (props: PropsType) => {
    return (
        <li key={props.item.id}>
            <div className="item" id="item">
                <img src={`/images/${props.item.img}`} alt="Miniatura das Pizzas" />
                <span>{props.item.sabor}</span>
                <button onClick={e => props.addPizza(props.item.id)} className="btn">+ADICIONAR</button>
            </div>
        </li>
    )
}