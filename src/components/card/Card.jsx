import './Card.css'

function Card(props){
    return(
        <div className='card'>

            <div className='img_card'>
            <img src={props.image}/>
            </div>

            <div className='description_card'>
            <h3>{props.titulo} - {props.cidade} / {props.estado}</h3>
            <hr />
            <p className='p_autor'><strong>Por: {props.autor}</strong></p>
            <p>Duração: {props.duracao}min</p>
            <p>Trajeto: {props.trajeto} km</p>
            <span>{props.dificuldade}!</span>
            </div>

        </div>
    )
}

export default Card