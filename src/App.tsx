import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import KindWords from "./pages/KindWords/KindWords";
import Moments from "./pages/Moments/Moments";
import Sessions from "./pages/Sessions/Sessions";
import { MyContextProvider } from "./MyContext";
import { Footer } from "./components/Footer";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />s
          <Route path="/contact" element={<Contact />} />
          <Route path="/kind-words" element={<KindWords />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>
        <Footer />
      </Router>
    </MyContextProvider>
  );
}

export default App;
