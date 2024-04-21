import ImagemHeader from "../../molecules/header/ImagemHeader/ImagemHeader";

function TrilhasAtoms() {
 return (
  <ImagemHeader
  className="img_trilhas_header"
   style={{
    height: "371px",
    width: "100vw",
    objectFit: "cover",
    filter: "brightness(24%)"
   }}
  />
 );
}

export default TrilhasAtoms;
