import "./Button.css"

function Button({children, onClick, type="button", variant = "default"}) {
    return (
        <button 
            className={'ui-button" ui-button--${variant}'}
            onClick={onclick}
        >
            {children}
        </button>
    )
}

export default Button