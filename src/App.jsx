import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { TrilhasContextProvider } from "./context/TrilhasContext";

function App() {
 return (
  <TrilhasContextProvider>
   <Header />
   <Outlet />
   <Footer />
  </TrilhasContextProvider>
 );
}

export default App;
