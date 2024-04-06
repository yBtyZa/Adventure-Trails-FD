import { useState, useEffect } from "react";

function useFetch(url) {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(false);
 const [isVisible, setIsVisible] = useState(true);

 useEffect(() => {
  setLoading(true);
  fetch(url)
   .then((res) => res.json())
   .then((value) => {
    setData(value);
   })
   .catch((error) => {
    alert("Ocorreu um erro ao carregar os dados: ");
    console.error(error);
   })
   .finally(() => setLoading(false));

  return () => {
   setIsVisible(false);
  };
 }, [url]);

 return [data, loading, isVisible];
}

export default useFetch;
