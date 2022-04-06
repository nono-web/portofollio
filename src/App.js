import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Components/intro/Intro';
import About from './Components/about/About';
import ProductList from './Components/productList/ProductList';
import Contact from './Components/contact/Contact';
import Toggle from './Components/toggle/Toggle';
import { ThemeContext } from './context';
import Prestation from './Components/prestations/Prestation';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#222' : 'rgb(201, 247, 247)',
        color: darkMode && 'white',
      }}
    >
      <Toggle />
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/presentation" element={<About />} />
          <Route path="/prestation" element={<Prestation />} />
          <Route path="/creation" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
