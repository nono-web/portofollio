import { useContext } from "react";
import Intro from "./Components/intro/Intro";
import About from "./Components/about/About";
import ProductList from "./Components/productList/ProductList";
import Contact from "./Components/contact/Contact";
import Toggle from "./Components/toggle/Toggle";
import { ThemeContext } from "./context";
import Prestation from "./Components/prestations/Prestation";



function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div 
      style={{
      backgroundColor: darkMode ? "#222" : "white", 
      color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Prestation />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
