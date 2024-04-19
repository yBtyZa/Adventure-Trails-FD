import "./Button.css"

function Button(props){

    return(
        <button className="button_atoms"
        onClick={props.onClick} style={props.style}>{props.titulo}</button>
    )
}

export default Button