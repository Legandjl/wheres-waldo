import { useContext } from "react";
import { useParams } from "react-router";
import { ImageContext } from "../../context/imageContext";
import "./Level.css";

//https://html.com/images/how-to-make-an-image-map/
// https://developer.mozilla.org/en-US/docs/Web/CSS/offset-position

const Level = () => {
  const { id } = useParams();
  const context = useContext(ImageContext);
  const gameImage = context.imageData.find((item) => {
    return item.id === parseInt(id);
  });

  const getCoords = (e) => {
    console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  return (
    <div className="levelWrap">
      <img alt={"find the pokemon"} onClick={getCoords} src={gameImage.src} />
    </div>
  );
};

export default Level;
