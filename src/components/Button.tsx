interface IButton {
    name: string;
    onClick: () => void;
    bgColor?: "green" | "blue" | "yellow" | "var(--accent-bg)";
    size?: "sm" | "md" | "lg";
}




function Button(props:IButton) {

    const {name, onClick, bgColor = 'var(--accent-bg)', size} = props;

    return(
        <>
            <button
                className="btn"
                style={{
                    width: size === 'sm' ? '100px' : size === 'md' ? '150px' : '200px',
                    backgroundColor: bgColor,
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={onClick}
            >
                {name}
            </button>
        </>
    )

}

export default Button