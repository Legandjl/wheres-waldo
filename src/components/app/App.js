import Header from "../header/Header";
import Home from "../home/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "../footer/Footer";
import { GameContextProvider } from "../../context/useGameContext";
import Level from "../levelpage/Level";
import Leaderboard from "../leaderboard/Leaderboard";

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/level/:id" element={<Level />} />
        </Routes>
      </GameContextProvider>
      <Footer />
    </div>
  );
}

export default App;
