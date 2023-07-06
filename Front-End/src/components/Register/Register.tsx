import { Link } from "react-router-dom"
import { UsuarioHook } from "../../hooks/UsuarioHook"

export default () => {
    const { usuario, handleChangeInput, handleChangeRegister } = UsuarioHook()
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <h1>Fazer Login</h1>
                <div>
                    <label htmlFor="NOME">Nome</label>
                    <input id="NOME" value={usuario.NOME} onChange={handleChangeInput} type="text" required />
                </div>
                <div>
                    <label htmlFor="SOBRENOME">Sobrenome</label>
                    <input id="SOBRENOME" value={usuario.SOBRENOME} onChange={handleChangeInput} type="text" required />
                </div>
                <div>
                    <label htmlFor="CPF">CPF</label>
                    <input id="CPF" value={usuario.CPF} onChange={handleChangeInput} type="text" required />
                </div>
                <div>
                    <label htmlFor="IDADE">Idade</label>
                    <input id="IDADE" value={usuario.IDADE} onChange={handleChangeInput} type="text" required />
                </div>
                <div>
                    <label htmlFor="TELEFONE">Telefone</label>
                    <input id="TELEFONE" value={usuario.TELEFONE} onChange={handleChangeInput} type="text" required />
                </div>
                <div>
                    <label htmlFor="EMAIL">Email</label>
                    <input id="EMAIL" value={usuario.EMAIL} onChange={handleChangeInput} type="Email" required />
                </div>
                <div>
                    <label htmlFor="SENHA">Senha</label>
                    <input id="SENHA" value={usuario.SENHA} onChange={handleChangeInput} type="Password" required />
                </div>
                <button onClick={handleChangeRegister}>Cadastrar</button>
            </form>
            <Link to="/usuario">Já tem cadastro?</Link>
        </div>
    )
}