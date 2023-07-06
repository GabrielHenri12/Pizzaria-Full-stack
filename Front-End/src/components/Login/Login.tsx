import { Link } from "react-router-dom"
import { UsuarioHook } from "../../hooks/UsuarioHook"

export default () => {
    const { usuario, handleChangeInput, handleChangeLogin } = UsuarioHook();
    
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Fazer Login</h1>
                <label htmlFor="EMAIL">Email</label>
                <input id="EMAIL" value={usuario.EMAIL} onChange={handleChangeInput} required />
                <label htmlFor="SENHA">Senha</label>
                <input id="SENHA" value={usuario.SENHA} onChange={handleChangeInput} required />
                <button onClick={handleChangeLogin}>Entrar</button>
            </form>
            <Link to="cadastrar">Cadastrar-se</Link>
        </div>
    )
}