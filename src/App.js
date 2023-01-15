import { ThemeProvider } from "styled-components";
import Home from "./pages";
import Contact from "./pages/contact";
import Bio from "./pages/bio";
import DigitalArt from "./pages/digitalart";
import Web from "./pages/web";
import Landscapes from "./pages/landscapes";
import Abstracts from "./pages/abstracts";
import Nott from "./pages/nott";
import Animals from "./pages/animals";
import SoundofLife from "./pages/soundoflife";
import Backgrounds from "./pages/dabackgrounds";
import Items from "./pages/daitems";
import Comics from "./pages/dacomics";
import Characters from "./pages/dacharacters";
import Portraits from "./pages/daportraits";
import Books from "./pages/dabooks";


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const theme = {
  colors: {
    header: `black`,
    body: `white`,
    footer: `black`,
  },
  font: {
    header: `white`,
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
          <Route path="/digital" element={<DigitalArt />} />
          <Route path="/web" element={<Web />} />
          <Route path="/landscapes" element={<Landscapes />} />
          <Route path="/abstracts" element={<Abstracts />} />
          <Route path="/nott" element={<Nott />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/soundoflife" element={<SoundofLife />} />
          <Route path="/dabackgrounds" element={<Backgrounds />} />
          <Route path="/dacomics" element={<Comics />} />
          <Route path="/daportraits" element={<Portraits />} />
          <Route path="/dacharacters" element={<Characters />} />
          <Route path="/daitems" element={<Items />} />
          <Route path="/dabooks" element={<Books />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
