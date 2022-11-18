import React, { useState } from 'react'
import Eye from "../../assets/olho.png"

export default (props: any) => {
    let RegisterFunc = props.func

    const [type, setType] = useState('password')

    function viwPassword(type: string) {
        switch (type) {
            case 'password': setType('text');
                break;
            case 'text': setType('password');
                break;
        }
    }

    return (
        <div className={`singleInput ${props.item.valid ? 'ture' : 'false'}`}>
            <input
                required
                type={type}
                id={props.id}
                value={props.item.value}
                onChange={e => RegisterFunc(e.target.value, props.id)}
            />
            <label htmlFor={props.id}>{props.item.valid ? props.id : props.textValid}:</label>
            <img src={Eye} onClick={e => viwPassword(type)} alt="Visualizar Senha" />
        </div>
    )
}