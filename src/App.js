import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";
import Pricing from "./components/pages/Pricing";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
