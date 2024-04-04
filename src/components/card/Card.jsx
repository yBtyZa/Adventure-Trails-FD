import "./Card.css";
import "boxicons";

function Card(props) {
  return (
    <div className="card">
      <div className="img_card">
        <img src={props.image} />
      </div>

      <div className="description_card">
        <h3>
          {props.titulo} - {props.cidade} / {props.estado}
        </h3>
        <hr />
        <p className="p_autor">
          <strong>Por: {props.autor}</strong>
        </p>
        <div className="info_trajeto">
          <p>Duração: {props.duracao}min</p>
          <p>Trajeto: {props.trajeto} km</p>
        </div>
        <span className="difficult_card">{props.dificuldade}!</span>
        <div className="avaliacao_card">
          <div className="stars_card">
            <box-icon type="solid" color="#950495" name="star"></box-icon>
            <box-icon type="solid" color="#950495" name="star"></box-icon>
            <box-icon type="solid" color="#950495" name="star"></box-icon>
            <box-icon type="solid" color="#950495" name="star"></box-icon>
            <box-icon type="solid" color="#eff0f0" name="star"></box-icon>
          </div>
          <a href="">Avaliações</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
