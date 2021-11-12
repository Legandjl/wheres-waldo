import "./Home.css";
import { GameContext } from "../../context/useGameContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(GameContext);
  const [currentIndex] = useState(0);
  //todo - add more images
  const images = context.imageData.map((item) => {
    return (
      <div key={item.id} className="homeImageContainer">
        <Link to={`/level/${item.id}`}>
          {" "}
          <img alt={"pokemon sprites"} src={item.src} />{" "}
        </Link>
      </div>
    );
  });

  return <div className="homeWrap">{images[currentIndex]}</div>;
};

export default Home;
