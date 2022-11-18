import React, { useEffect, useState } from 'react'
import './Login.css'
import Eye from "../../assets/olho.png"
import api from '../../BaseApi/BaseUrl'

export default () => {

    const [type, setType] = useState('password')
    const [type2, setType2] = useState('password')

    function viwPassword(type: string) {
        switch (type) {
            case 'password': setType('text');
                break;
            case 'text': setType('password');
                break;
        }
    }

    function viwConfirmPassword(type: string) {
        switch (type) {
            case 'password': setType2('text');
                break;
            case 'text': setType2('password');
                break;
        }
    }

    const [name, setName] = useState({value:'', valid: true})
    const [userName, setUserName] = useState({value:'', valid: true})
    const [email, setEmail] = useState({value:'', valid: true})
    const [password, setPassword] = useState({value:'', valid: true})
    const [ConfirmPassword, setConfirmPassword] = useState({value:'', valid: true})

    let newUser = {name, userName, email, password}

    function Register() {
        api
            .post("/user/cadastre/", newUser)
            .then(response => console.log(response.data))
            .catch(err => console.log('deu erro' + err))
    }

    function RegisterFunc(e: string, type: string) {
        switch (type) {
            case 'name':
                if(e.length < 2){
                    setName({value: e, valid:false})
                }else{
                    setName({value: e, valid:true})
                }
                break;
            case 'userName':
                if(e.length < 5){
                    setUserName({value: e, valid:false})
                }else{
                    setUserName({value: e, valid:true})
                }
                break;
            case 'email':
                if(e.length < 8){
                    setEmail({value: e, valid:false})
                }else{
                    setEmail({value: e, valid:true})
                }
                break;
            case 'password':
                if(e.length < 6){
                    setPassword({value: e, valid:false})
                }else{
                    setPassword({value: e, valid:true})
                    if(e == ConfirmPassword.value){
                        setConfirmPassword({value:e, valid: true})
                    }
                }
                break;
            case 'ConfirmPassword':
                if(e != password.value){
                    setConfirmPassword({value: e, valid: false})
                }else{
                    setConfirmPassword({value: e, valid: true})
                }
                break;
        }
    }

    return (
        <div>
            <form className='form'>
                <div className="input">
                    <h2>Cadastro</h2>
                    <div className={`singleInput ${name.valid? 'ture':'false'}`}>
                        <input
                            required
                            type="text"
                            id="Name"
                            value={name.value}
                            onChange={e => RegisterFunc(e.target.value, 'name')}
                        />
                        <label htmlFor="Name" id="LabelName">{name.valid? 'Nome':'Dígite seu nome'}:</label>
                    </div>
                    <div className={`singleInput ${userName.valid? 'ture':'false'}`}>
                        <input
                            required
                            type="text"
                            id="UserName"
                            value={userName.value}
                            onChange={e => RegisterFunc(e.target.value, 'userName')}
                        />
                        <label htmlFor="UserName" id="LabelUserName">{userName.valid? 'User Name':'Mínimo de 5 caractere'}:</label>
                    </div>
                    <div className={`singleInput ${email.valid? 'ture':'false'}`}>
                        <input
                            required
                            type="text"
                            id="email"
                            value={email.value}
                            onChange={e => RegisterFunc(e.target.value, 'email')}
                        />
                        <label htmlFor="email" id="LabelEmail">{email.valid? 'Email':'Email invalido'}:</label>
                    </div>
                    <div className={`singleInput ${password.valid? 'ture':'false'}`}>
                        <input
                            required
                            type={type}
                            id="password"
                            value={password.value}
                            onChange={e => RegisterFunc(e.target.value, 'password')}
                        />
                        <label htmlFor="password" id="labelpassword">{password.valid? 'Senha':'Senha invalida'}:</label>
                        <img src={Eye} onClick={e => viwPassword(type)} alt="Visualizar Senha" />
                    </div>
                    <div className={`singleInput ${ConfirmPassword.valid? 'ture':'false'}`}>
                        <input
                            required
                            type={type2}
                            id="ConfirmPassword"
                            value={ConfirmPassword.value}
                            onChange={e => RegisterFunc(e.target.value, 'ConfirmPassword')}
                        />
                        <label htmlFor="ConfirmPassword" id="labelConfirmPassword">{ConfirmPassword.valid? 'Confirmar Senha':'Senhas diferente'}:</label>
                        <img src={Eye} onClick={e => viwConfirmPassword(type2)} alt="Visualizar Senha" />
                    </div>
                    <button onClick={Register}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}