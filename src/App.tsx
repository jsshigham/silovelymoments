import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import KindWords from "./pages/KindWords";
import Moments from "./pages/Moments";
import Sessions from "./pages/Sessions";
import { MyContextProvider } from "./MyContext";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />s
          <Route path="/contact" element={<Contact />} />
          <Route path="/kind-words" element={<KindWords />} />
          <Route path="/moments" element={<Moments />} />
          <Route path="/sessions" element={<Sessions />} />
        </Routes>
      </Router>
    </MyContextProvider>
  );
}

export default App;
