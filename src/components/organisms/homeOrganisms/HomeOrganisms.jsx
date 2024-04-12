import { Link } from "react-router-dom";
import Button from "../../atoms/button/Button";

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
       src="https://s3-alpha-sig.figma.com/img/749a/d3cd/b59b552226c32b61fb8ba0ba617adccb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NGwjSnDaaKjKexnlWu1ilnUx6YJb1BX6YieK~FC2nlRpPiOasMRO~AP3FP45EnCtHAZ7p2I~2jTq3P1GvnJ0jouuxFzflK6SBchxsbYzVzfXKiNhhz6tE7ahAT8zig2kt9whVF5d0KEUyt5axCosM15nhnXy43DIBsY6sXhHtXyfFYaai1ucxjdWf2x3aBHsYkXV6PMLsmEbhdLR4Bt8dzoiPgywb63o5rgUFm7HitTMI9I0MlEnT-6piPXEvZm7YZfRen1kTsHf99~tSueQdaIpBOheAiufn4e3KVQoHaq8IZhpv~KGtJZ7tvIAXAcotvxenDlM7lKeK~uovykcYQ__"
       alt="pexels-tibor-szabo-17345226"
      />
     </div>
    </div>
   </div>
    )
}

export default HomeOrganisms