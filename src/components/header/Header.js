import { useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { GameContext } from "../../context/useGameContext";
import "./Header.css";
import HeaderImages from "./HeaderImages";
import logo from "./logo.png";
import pokeball from "./pokeball.png";

const Header = () => {
  const context = useContext(GameContext);
  const pokeballs = context.foundItems.map((item, i) => {
    return (
      <img
        key={i}
        alt={"pokeball, white and red"}
        className="pokeball"
        src={pokeball}
      />
    );
  });
  return (
    <div className="header">
      <Routes>
        <Route path="/" element={null} />
        <Route path="/level/:id" element={<HeaderImages />} />
        <Route path="/leaderboard" element={null} />
      </Routes>
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="find the pokemon, pokemon font logo"
          border="0"
        />
      </Link>
      <div className="pokeballWrap">{pokeballs}</div>
    </div>
  );
};

export default Header;
