import Card from "../../molecules/card/Card";
import { useContext } from "react";
import { TrilhasContext, } from "../../../context/TrilhasContext";
import TrilhasAtoms from "../../atoms/trilhasAtoms/TrilhasAtoms";

function TrilhasTemplates() {

    const { trilhas, loading, isVisible } = useContext(TrilhasContext);

    return(
        <>
        <TrilhasAtoms />
        <div className="container">
    <h1>Explore trilhas incríveis</h1>
    {isVisible && (
     <>
      {loading && <p>Carregando trilhas...</p>}
      {!loading && trilhas !== null && (
       <div className="app">
        {trilhas.map((item, index) => (
         <Card key={index} {...item} />
        ))}
       </div>
      )}
     </>
    )}
   </div>
   </>
    )
}

export default TrilhasTemplates