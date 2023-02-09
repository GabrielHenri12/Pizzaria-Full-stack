import { cart } from "../../views/Cart/Cart"
import Delet from '../../assets/delete.png'
import "./CardCart.css"

type PropsCardCart = {
    item: cart,
    value: number,
    deletItem(id: number): void
}

export default (props: PropsCardCart) => {
    return (
        <li key={props.item.id_pedido}>
            <div className='cool-1'>
                <img className='Img-Pizza' src={`/images/${props.item.img}`} alt="Miniatura das Pizzas" />
                <span>{props.item.sabor} </span>
            </div>
            <div className='cool-2'>
                <span>{props.item.tamanho} </span>
                <span id='quantidade'>{props.item.quantidade}</span>
                <span>R${props.value}</span>
            </div>
            <img className='button-delet' src={Delet} onClick={_ => props.deletItem(props.item.id_pedido)} />
        </li>
    )
}