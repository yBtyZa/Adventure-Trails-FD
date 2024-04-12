import ImagemHeader from "../../molecules/header/ImagemHeader/ImagemHeader";
function HomeAtoms() {
 return (
  <>
   <ImagemHeader
    style={{
     height: "95vh",
     width: "100vw",
     objectFit: "cover",
     filter: "brightness(24%)"
    }}
   />
  </>
 );
}

export default HomeAtoms;
