import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Home from "./pages/Startpage";
import About from "./pages/About";

import './App.css';

function App() {

  return (
  <>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/omoss" element={<About />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App;
