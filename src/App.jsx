import Card from "./components/card/Card";
import "./App.css";

function App() {
  let data = [
    {
      image:
        "https://images.pexels.com/photos/4300343/pexels-photo-4300343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      titulo: "Trilha da Costa da Lagoa",
      autor: "Guilherme Betsa",
      cidade: "Florianópolis",
      estado: "Sc",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
    },
    {
      image:
        "https://images.pexels.com/photos/4300343/pexels-photo-4300343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      titulo: "Trilha da Costa da Lagoa",
      autor: "Guilherme Betsa",
      cidade: "Florianópolis",
      estado: "Sc",
      duracao: 120,
      trajeto: 4,
      dificuldade: "Iniciante",
      tipo: "Caminhada",
    }
  ];

  return data.map((item) => (
    <div className="app">
      <Card {...item} />
    </div>
  ));
}

export default App;
