import Card from "../components/card/Card";
import { useContext } from "react";
import { TrilhasContext } from "../context/TrilhasContext";
import ImagemHeader from "../components/header/ImagemHeader/ImagemHeader";

function Trilhas() {

 const { data, loading, isVisible } = useContext(TrilhasContext);

 return (
  <>
  <ImagemHeader style={{ height: '371px', width: '100vw', objectFit: 'cover', filter: 'brightness(24%)' }}/>
   <div className="container">
    <h1>Explore trilhas incríveis</h1>
    {isVisible && (
     <>
      {loading && <p>Carregando trilhas...</p>}
      {!loading && data !== null && (
       <div className="app">
        {data.map((item, index) => (
         <Card key={index} {...item} />
        ))}
       </div>
      )}
     </>
    )}
   </div>
  </>
 );
}

export default Trilhas;
