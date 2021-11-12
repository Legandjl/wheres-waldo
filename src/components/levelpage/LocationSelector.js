import { useContext } from "react";
import { GameContext } from "../../context/useGameContext";

const Selector = (props) => {
  const context = useContext(GameContext);
  const names = props.coords
    .filter((item) => {
      return !context.foundItems.includes(item);
    })
    .map((item, i) => {
      let name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
      return (
        <p data-name={item.name} key={i} onClick={props.menuClick}>
          {name}
        </p>
      );
    });

  return (
    <div
      className="nameMenu"
      style={{
        display: props.showMenu ? "block" : "none",
        position: "absolute",
        top: props.mousePos[1],
        left: props.mousePos[0],
      }}
    >
      {names}
    </div>
  );
};

export default Selector;
