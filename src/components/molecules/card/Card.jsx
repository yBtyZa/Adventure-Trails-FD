import { useState } from "react";
import {Link} from "react-router-dom"
import "./Card.css";
import "boxicons";

function Card(props) {
 const [starsAvaliacao, setStarsAvaliacao] = useState([
  {
   star: '<box-icon type="solid" name="star"',
   final: " ></box-icon",
   cor: 'color="#eff0f0"',
   hover: false,
   click: false
  },
  {
   star: '<box-icon type="solid" name="star"',
   final: " ></box-icon",
   cor: 'color="#eff0f0"',
   hover: false,
   click: false
  },
  {
   star: '<box-icon type="solid" name="star"',
   final: " ></box-icon",
   cor: 'color="#eff0f0"',
   hover: false,
   click: false
  },
  {
   star: '<box-icon type="solid" name="star"',
   final: " ></box-icon",
   cor: 'color="#eff0f0"',
   hover: false,
   click: false
  },
  {
   star: '<box-icon type="solid" name="star"',
   final: " ></box-icon",
   cor: 'color="#eff0f0"',
   hover: false,
   click: false
  }
 ]);

 function handleMouseEnter(index) {
  const updatedStars = starsAvaliacao.map((item, i) => ({
    ...item,
    hover: i <= index,
  }));
  setStarsAvaliacao(updatedStars);
 }

 function handleMouseLeave() {
  const updatedStars = starsAvaliacao.map((item) => ({
    ...item,
    hover : false,
  }));
  setStarsAvaliacao(updatedStars);
 }

 function mudarCorAvaliacoes(index) {
  const updatedStars = starsAvaliacao.map((item, i) => ({
    ...item,
    click: i <= index ? true : false
  }));

  setStarsAvaliacao(updatedStars);
 }

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
    <div className="info_trajeto">
    <p className="p_autor">
      Tipo: {props.tipo}
     <strong>Por: {props.autor}</strong>
    </p>
     <p>Duração: {props.duracao}min</p>
     <p>Trajeto: {props.trajeto} km</p>
    </div>
    <span className="difficult_card">{props.dificuldade}!</span>

    <div className="avaliacao_card">
     <div className="stars_card">
      {starsAvaliacao.map((item, index) => (
       <div
       className="div_stars"
        key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => mudarCorAvaliacoes(index)}
        dangerouslySetInnerHTML={{
         __html: `${item.star}${item.hover || item.click ? 'color="#950495"' : item.cor}${
          item.final
         }`
        }}></div>
      ))}
     </div>

     <Link to={'/'}>Avaliações</Link>
    </div>
   </div>
  </div>
 );
}

export default Card;
