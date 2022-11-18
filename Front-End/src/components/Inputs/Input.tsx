import React from 'react'

export default (props:any) => {
    let RegisterFunc = props.func

    return (
        <div className={`singleInput ${props.item.valid ? 'ture' : 'false'}`}>
            <input
                required
                type={props.type}
                id={props.id}
                value={props.item.value}
                onChange={e => RegisterFunc(e.target.value, props.id)}
            />
            <label htmlFor={props.id}>{props.item.valid ? props.id : props.textValid}:</label>
        </div>
    )
}