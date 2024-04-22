import { Link } from "react-router-dom";
import Button from "../../atoms/button/Button";
import  imageMain  from "../../../assets/img/imageMain.jpeg";

function HomeOrganisms(){

    return(
        <div className="home">
    <h1>Explore trilhas incríveis</h1>
    <p>
     O "Adventure Trails FD" é seu portal para explorar e compartilhar as
     melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas
     deslumbrantes, desde caminhos tranquilos por florestas exuberantes até
     trilhas desafiadoras em montanhas majestosas. Encontre informações
     detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de
     interesse naturais e dicas úteis para uma experiência eco-friendly.
    </p>
    <div className="home_btn">
     <Link to="/trilhas">
      <Button titulo="Explorar trilhas" />
     </Link>
    </div>

    <div className="home_two">
     <div className="home_info">
      <h1>Compartilhe fotos, dicas e localização das suas trilhas favoritas</h1>
      <Link to="/cadastro-trilhas">
      <Button titulo="Cadastrar nova trilha" />
      </Link>
     </div>
     <div className="home_img">
      <img
       src={ imageMain }
       alt="imagem trilha"
      />
     </div>
    </div>
   </div>
    )
}

export default HomeOrganisms