interface IInput {
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: string;
}


function Input(props: IInput) {
    const {name, value, onChange, placeholder, type} = props;
    return (
        <>
        <input name={name} type={type} value={value} onChange={(event)=>onChange(event)} placeholder={placeholder} ></input>
        </>
    )
}

export default Input