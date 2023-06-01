import './button.css';

const Button = (props) => {
    return (
        <button id={props.id} className={props.className} onClick={props.page}>{props.title}</button>
    )
}

export default Button;