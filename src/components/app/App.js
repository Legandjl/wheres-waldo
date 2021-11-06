import Header from "../header/Header";
import Home from "../home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "../footer/Footer";
import { ImageContextProvider } from "../../context/imageContext";
import Level from "../levelpage/Level";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/level/:id" element={<Level />} />
        </Routes>
      </ImageContextProvider>
      <Footer />
    </div>
  );
}

export default App;
