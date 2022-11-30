import Logo from '../../assets/Icone.png'
import home from "../../assets/home.png"
import login from "../../assets/login.png"
import cart from "../../assets/cart.png"
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../services/auth'
import './Header.css'

export default () => {
    let logged = isAuthenticated();
    let navigate = useNavigate()

    function loggout() {
        signOut()
        navigate('/login')
    };

    return (
        <header className='Header'>
            <div className="logo">
                <Link to="/">
                    <span>PizzaMel</span>
                    <img src={Logo} alt="Icone de uma pizza" />
                </Link>
            </div>
            <div className='navegacao'>
                <nav className="Nav">
                    <ul className='Menu'>
                        {!logged &&
                            <>
                                <li><Link to="/"><img src={home} alt="Pagina principal" />Home</Link></li>
                                <li><Link to="/login"><img src={cart} alt="Pagina do carrinho" />Carrinho</Link></li>
                                <li><Link to="/login"><img src={login} alt="Pagina de login" />Login</Link></li>
                            </>
                        }
                        {logged &&
                            <>
                                <li><Link to="/"><img src={home} alt="Pagina principal" />Home</Link></li>
                                <li><Link to="/carrinho"><img src={cart} alt="Pagina principal" />Carrinho</Link></li>
                                <li><button onClick={e => loggout()}>Sair</button></li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}