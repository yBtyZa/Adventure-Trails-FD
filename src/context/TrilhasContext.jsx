import { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const TrilhasContext = createContext();

export const TrilhasContextProvider = ({ children }) => {
   const [ data, loading, isVisible] = useFetch("/trilhas.json");

 return (
   <TrilhasContext.Provider value={{ data, loading, isVisible }}>
   {children}
   </TrilhasContext.Provider>
 )
}
