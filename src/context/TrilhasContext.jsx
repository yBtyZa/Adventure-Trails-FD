import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
   const [ data, loading, isVisible ] = useFetch("/trilhas.json");

   const [trilhas, setTrilhas] = useState([]);

   useEffect(() => {
    if (!loading && data) {
       setTrilhas(data);
    }
 }, [data, loading]);


 return (
   <TrilhasContext.Provider value={{ trilhas, loading, isVisible, setTrilhas }}>
   {children}
   </TrilhasContext.Provider>
 )
}
