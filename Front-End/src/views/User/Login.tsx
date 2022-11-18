import React, { useState } from 'react'
import './Login.css'
import Eye from "../../assets/olho.png"
import api from '../../BaseApi/BaseUrl'

export default () => {

    const [type, setType] = useState('password')

    function viwPassword(type: string) {
        switch (type) {
            case 'password': setType('text');
                break;
            case 'text': setType('password');
                break;
        }
    }

    const [email, setUser] = useState('')
    const [password, setPassword] = useState('')

    function login(email:string, password:string ) {
        api
            .post("/user/login/", {email, password})
            .then(response => console.log(response.data))
            .catch(err => console.log('deu erro' + err))
    }

    function loginFunc(e: string, type: string) {
        switch (type) {
            case 'email':
                setUser(e)
                break;
            case 'password':
                setPassword(e)
                break;
        }
    }

    return (
        <div>
            <div className='form'>
                <div className="input">
                    <h2>Login</h2>
                    <div className="singleInput">
                        <input
                            required
                            type="text"
                            id="email"
                            value={email}
                            onChange={e => loginFunc(e.target.value, 'email')}
                        />
                        <label htmlFor="email" id="LabelEmail">Email:</label>
                    </div>
                    <div className="singleInput">
                        <input
                            required
                            type={type}
                            id="senha"
                            value={password}
                            onChange={e => loginFunc(e.target.value, 'password')}
                        />
                        <label htmlFor="senha" id="labelSenha">Senha:</label>
                        <img src={Eye} onClick={e => viwPassword(type)} id="verSenha" alt="Visualizar Senha" />
                    </div>
                    <a href="/cadastro">cadastrar?</a>
                    <button onClick={e=> login(email, password)}>Login</button>
                </div>
            </div>
        </div>
    )
}