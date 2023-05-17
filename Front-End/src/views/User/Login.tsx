import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import api from '../../services/Api'
import Input from '../../components/Inputs/Input'
import InputPassword from '../../components/Inputs/InputPassword'
import { signIn, signOut } from '../../services/auth';

export default () => {

    const [Err, setErr] = useState('')
    const [email, setUser] = useState({ value: '', valid: true })
    const [password, setPassword] = useState({ value: '', valid: true })
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    function loggout() {
        signOut()
        alert('deslogado')
        navigate('/login')
    };

    function login(event: any) {
        event.preventDefault();
        let user = { EMAIL: email.value, SENHA: password.value }
        setLoading(true)
        api
            .post("entrar/", user)
            .then(response => {
                if (response.data.status == false) {
                    setErr(response.data.error)
                    setLoading(false)
                } else {
                    signIn(response.data.data)
                    setTimeout(loggout, 5000000)
                    setLoading(false)
                    navigate('/')
                }
            })
            .catch(err => console.log('deu erro' + err))
    }

    function loginFunc(e: string, type: string) {
        switch (type) {
            case 'Email':
                setUser({ value: e, valid: true })
                break;
            case 'Password':
                setPassword({ value: e, valid: true })
                break;
        }
    }

    return (
        <div>
            <form onSubmit={login} className='form'>
                <div className="input">
                    <h2>Login</h2>
                    {Err}
                    <Input type={'text'} id={'Email'} item={email} func={loginFunc} />
                    <InputPassword id={'Password'} item={password} func={loginFunc} />
                    <Link id='cadastrar' to="/cadastro">cadastrar-se</Link>
                    <button className='button'>{loading? "carregando...": "Login"}</button>
                </div>
            </form>
        </div>
    )
}