import Card from "./components/card/Card";
import Header from "./components/header/Header";
import "./App.css";
import useFetch from "./hooks/useFetch";
function App() {

  const [trilhas, loading] = useFetch(
    "/Trilhas.json"
  );

  return (
    <div className="container">
      <Header />
      <h1>Explore trilhas incríveis</h1>

      {loading && <p>Carregando trilhas...</p>}
      {!loading && trilhas !== null && (
        <div className="app">
          {trilhas.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
