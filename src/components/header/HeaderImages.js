import { useContext } from "react";
import { useParams } from "react-router";

import { GameContext } from "../../context/useGameContext";
import { imageIcons } from "../../images/imagedata/images";

const HeaderImages = (props) => {
  const params = useParams();
  const context = useContext(GameContext);
  const foundItems = context.foundItems;

  const checkFound = (name) => {
    if (
      foundItems.find((item) => {
        return item.name === name;
      }) === undefined
    ) {
      return false;
    }
    return true;
  };

  const icons = imageIcons
    .filter((icon) => {
      return icon.id === parseInt(params.id);
    })
    .map((icon, i) => {
      return (
        <div key={i}>
          <img
            key={i}
            alt={"pokemon icon"}
            src={icon.src}
            style={{ display: checkFound(icon.name) ? "none" : "block" }}
          />
        </div>
      );
    });

  return <div className="iconWrap">{icons}</div>;
};

export default HeaderImages;
