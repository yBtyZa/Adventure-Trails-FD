import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/molecules/header/Header";
import Footer from "./components/atoms/footer/Footer";

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
