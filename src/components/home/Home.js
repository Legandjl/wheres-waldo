import "./Home.css";
import { ImageContext } from "../../context/imageContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const context = useContext(ImageContext);
  const [currentIndex, setIndex] = useState(0);
  //todo - add more images
  const images = context.imageData.map((item) => {
    return (
      <div key={item.id} className="homeImageWrap">
        <Link to={`/level/${item.id}`}>
          {" "}
          <img alt={"pokemon sprites"} src={item.src} />{" "}
        </Link>
      </div>
    );
  });
  const switchImage = () => {
    //if currentindex = 1 current index = 0
    // if current index = 0 current index = 1
  };
  return (
    <div className="homeWrap">
      <div className="homeImageContainer">{images[currentIndex]}</div>
    </div>
  );
};

export default Home;
