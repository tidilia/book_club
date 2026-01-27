import "./Button.css"

function Button({ children, onClick, type = "button", variant = "default" }) {
    return (
        <button
            className={`ui-button ${variant ? `ui-button--${variant}` : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button