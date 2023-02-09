export default (props:any) => {
    let onChangeFunc = props.func

    return (
        <div className={`singleInput ${props.item.valid ? 'ture' : 'false'}`}>
            <input
                required
                type={props.type}
                id={props.id}
                value={props.item.value}
                onChange={e => onChangeFunc(e.target.value, props.id)}
            />
            <label htmlFor={props.id}>{props.item.valid ? props.id : props.textValid}:</label>
        </div>
    )
}