import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import api from '../../services/Api'
import Input from '../../components/Inputs/Input';
import InputPassword from '../../components/Inputs/InputPassword';

export default () => {

    const [name, setName] = useState({ value: '', valid: true })
    const [userName, setUserName] = useState({ value: '', valid: true })
    const [email, setEmail] = useState({ value: '', valid: true })
    const [password, setPassword] = useState({ value: '', valid: true })
    const [ConfirmPassword, setConfirmPassword] = useState({ value: '', valid: true })
    const [err, setErr] = useState({ status: false, mensage: '' })
    const navigate = useNavigate();

    
    function onSubmit(event: any) {
        event.preventDefault();

        let newUser = {}
        if (name.valid && userName.valid && email.valid && password.valid && ConfirmPassword.valid) {
            newUser = {
                name: name.value,
                userName: userName.value,
                email: email.value,
                password: password.value
            }
            api
                .post("/user/cadastre/", newUser)
                .then(response => {
                    if (response.data.status == false) {
                        setErr({ status: true, mensage: 'Eamil já cadastrado!' })
                    } else {
                        navigate('/login')
                    }
                })
                .catch(err => console.log('deu erro' + err))
        } else {
            setErr({ status: true, mensage: 'Preencha todos os campos corretamente!' })
        }
    }


    function RegisterFunc(e: string, type: string) {
        switch (type) {
            case 'Name':
                if (e.length < 2) {
                    setName({ value: e, valid: false })
                } else {
                    setName({ value: e, valid: true })
                }
                break;
            case 'UserName':
                if (e.length < 5) {
                    setUserName({ value: e, valid: false })
                } else {
                    setUserName({ value: e, valid: true })
                }
                break;
            case 'Email':
                if (e.length < 8) {
                    setEmail({ value: e, valid: false })
                } else {
                    setEmail({ value: e, valid: true })
                }
                break;
            case 'Senha':
                if (e.length < 6) {
                    setPassword({ value: e, valid: false })
                } else {
                    setPassword({ value: e, valid: true })
                    if (e == ConfirmPassword.value) {
                        ConfirmPassword.valid = true
                    } else {
                        ConfirmPassword.valid = false
                    }
                }
                break;
            case 'Confirmar-Senha':
                if (e != password.value) {
                    setConfirmPassword({ value: e, valid: false })
                } else {
                    setConfirmPassword({ value: e, valid: true })
                }
                break;
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <div className="input">
                    <h2>Cadastro</h2>
                    {err.status ? <span>{err.mensage}</span> : ''}
                    <Input type={'text'} id={'Name'} textValid={'Dígite seu nome'} item={name} func={RegisterFunc} />
                    <Input type={'text'} id={'UserName'} textValid={'Mínimo de 5 caractere'} item={userName} func={RegisterFunc} />
                    <Input type={'text'} id={'Email'} textValid={'Email invalido'} item={email} func={RegisterFunc} />
                    <InputPassword id={'Senha'} textValid={'Senha invalida'} item={password} func={RegisterFunc} />
                    <InputPassword id={'Confirmar-Senha'} textValid={'Senhas diferente'} item={ConfirmPassword} func={RegisterFunc} />
                    <button>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}