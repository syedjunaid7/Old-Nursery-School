import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Adimission from "./pages/Admission/Adimission";
import ContactUs from "./pages/ContactUs/ContactUs";
import Navbar from "./components/Header/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/admission" element={<Adimission />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
