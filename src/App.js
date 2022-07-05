import { ThemeProvider } from "styled-components";
import Home from "./pages";
import Contact from "./pages/contact";
import Bio from "./pages/bio";
import Art from "./pages/art";
import DigitalArt from "./pages/digitalart";
import Web from "./pages/web";
import Landscapes from "./pages/landscapes";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = {
  colors: {
    header: `black`,
    body: `white`,
    footer: `black`,
  },
  font: {
    header: `#C8CAE1`,
    body: `black`,
    footer: `white`,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/art" element={<Art />} />
          <Route path="/digitalart" element={<DigitalArt />} />
          <Route path="/web" element={<Web />} />
          <Route path="/landscapes" element={<Landscapes />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
