import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { GameContext } from "../../context/useGameContext";
import LeaderboardSubmit from "./LeaderboardSubmit";

import "./Level.css";
import Selector from "./LocationSelector";

const Level = () => {
  let { id } = useParams();
  id = parseInt(id);
  const context = useContext(GameContext);
  const {
    clearFound,
    getDataById,
    foundItems,
    fb,
    isLoading,
    setFound,
    imageData,
  } = context;
  const { getStartTime } = fb;
  const gameImage = imageData.find((item) => {
    return item.id === id;
  });
  const data = getDataById(id);

  const [showMenu, setShowMenu] = useState(false);
  const [mousePos, setMousePos] = useState([0, 0]);
  const [lastMouseClick, setLastMouseClick] = useState([0, 0]);
  const [gameFinished, setGameFinish] = useState(false);

  const [startTime, setStartTime] = useState(0);

  //reset found items every time component mounts (ie route back to home, then back to game)

  useEffect(() => {
    return () => {
      clearFound();
    };
  }, [clearFound]);

  useEffect(() => {
    if (!gameFinished && startTime <= 0) {
      setStartTime(getStartTime());
    }
  }, [gameFinished, getStartTime, startTime]);

  useEffect(() => {
    if (!isLoading && foundItems.length === data.length && !gameFinished) {
      setGameFinish(true);
    }
  }, [isLoading, data, foundItems, gameFinished]);

  const handleImageClick = (e) => {
    if (!gameFinished) {
      const { pageX, pageY, offsetX, offsetY } = e.nativeEvent;
      console.log(offsetX, offsetY);
      setMousePos([pageX, pageY]);
      setLastMouseClick([offsetX, offsetY]);
      setShowMenu(true);
    }
  };

  const handleMenuClick = (e) => {
    const name = e.target.dataset.name;
    const toCheck = data.find((item) => {
      return item.name === name;
    });
    if (isCorrectPos(toCheck) && !gameFinished) {
      setFound(name, id);
    }
    setShowMenu(false);
  };

  const isCorrectPos = (toCheck) => {
    return (
      lastMouseClick[0] >= toCheck.x[0] &&
      lastMouseClick[0] <= toCheck.x[1] &&
      lastMouseClick[1] >= toCheck.y[0] &&
      lastMouseClick[1] <= toCheck.y[1]
    );
  };

  return (
    <div className="levelWrap">
      {gameFinished && <LeaderboardSubmit startTime={startTime} />}
      <Selector
        showMenu={showMenu}
        mousePos={mousePos}
        menuClick={handleMenuClick}
        coords={data}
      />
      <img
        alt={"find the pokemon"}
        onClick={
          isLoading
            ? null
            : showMenu
            ? () => {
                setShowMenu(false);
              }
            : handleImageClick
        }
        src={gameImage.src}
      />
    </div>
  );
};

export default Level;
