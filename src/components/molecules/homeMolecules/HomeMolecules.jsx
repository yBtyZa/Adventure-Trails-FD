import {Link} from "react-router-dom"
import Button from "../../atoms/button/Button"

function HomeMolecules(){
    return(
        <div className="home_header">
     <h1>Que tal aproveitar um tempo com a natureza?</h1>
     <p>
      Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
      aventuras e inspire-se com as experiências de outros aventureiros.
      Prepare-se para explorar novos horizontes e se conectar com a natureza
      através do Adventure Trails!
     </p>
     <div className="home_btn">
      <Link to="/trilhas">
       <Button style={{ width: "151px" }} titulo="Explorar trilhas" />
      </Link>
     </div>
    </div>
    )
}

export default HomeMolecules