import { useContext } from "react";
import { TrilhasContext, } from "../context/TrilhasContext";

function CadastroTrilhas(){

    const { trilhas, setTrilhas } = useContext(TrilhasContext);
    function adicionarNovaTrilha(){
        const novaTrilha = {
            "image": "https://example.com/nova-trilha.jpg",
            "titulo": "Nova Trilha",
            "autor": "Autor da Nova Trilha",
            "cidade": "Florianópolis",
            "estado": "SC",
            "duracao": 90,
            "trajeto": 5,
            "dificuldade": "Intermediário",
            "tipo": "Caminhada"
          }

          setTrilhas([novaTrilha, ...trilhas]);
          alert("Trilha adicionada com sucesso!")
    }

    return(
        <>
        <button onClick={adicionarNovaTrilha}>Adicionar nova trilha</button>
        </>
    )
}

export default CadastroTrilhas