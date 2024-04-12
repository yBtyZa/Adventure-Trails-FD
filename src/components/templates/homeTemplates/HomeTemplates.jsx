import HomeAtoms from "../../atoms/homeAtoms/HomeAtoms";
import HomeMolecules from "../../molecules/homeMolecules/HomeMolecules";
import HomeOrganisms from "../../organisms/homeOrganisms/HomeOrganisms";

function HomeTemplates(){
    return(
        <div>
   <div className="container_image">
    
    <HomeAtoms/>
    <HomeMolecules/>
   </div>
     <HomeOrganisms/>
  </div>
    )
}

export default HomeTemplates