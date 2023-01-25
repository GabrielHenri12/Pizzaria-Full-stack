import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import api from '../../services/Api'
import Input from '../../components/Inputs/Input'
import InputPassword from '../../components/Inputs/InputPassword'
import { signIn, signOut } from '../../services/auth';

export default () => {

    const [Err, setErr] = useState('')
    const [email, setUser] = useState({ value: '', valid: true })
    const [password, setPassword] = useState({ value: '', valid: true })
    const [loadind, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    function loggout() {
        signOut()
        alert('deslogado')
        navigate('/login')
    };

    function login(event: any) {
        event.preventDefault();
        let user = { email: email.value, password: password.value }
        setLoading(false)
        api
            .post("/user/login/", user)
            .then(response => {
                if (response.data.status == false) {
                    setErr(response.data.error)
                    setLoading(true)
                } else {
                    signIn(response.data.token)
                    setTimeout(loggout, 5000000)
                    setLoading(true)
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
                    <a id='cadastrar' href="/cadastro">cadastrar?</a>
                    <button className='button'>Login</button>
                    {!loadind && <span>Carregando...</span>}
                </div>
            </form>
        </div>
    )
}