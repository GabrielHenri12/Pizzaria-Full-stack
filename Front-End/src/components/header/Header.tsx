import React from 'react'
import Logo from '../../assets/Icone.png'
import home from "../../assets/home.png"
import login from "../../assets/login.png"
import cart from "../../assets/cart.png"
import './Header.css'

export default () => {
    return (
        <header className='Header'>
            <div className="logo">
                <a href="/">
                    <span>PizzaMel</span>
                    <img src={Logo} alt="Icone de uma pizza" />
                </a>
            </div>
            <div className='navegacao'>
                <nav className="Nav">
                    <ul className='Menu'>
                        <li><a href="/"><img src={home} alt="Pagina principal" />Home</a></li>
                        <li><a href="/carrinho"><img src={cart} alt="Pagina do carrinho" />Carrinho</a></li>
                        <li><a href="/login"><img src={login} alt="Pagina de login" />Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}