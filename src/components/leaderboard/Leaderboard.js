import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/useGameContext";
import "./leaderboard.css";

const Leaderboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState([]);
  const context = useContext(GameContext);

  const boardElement = leaderboard.map((item, i) => {
    return (
      <div key={i}>
        <li>
          <p>{i + 1}: </p>
          <p>{item.name === "" ? "Anonymous" : item.name}</p>
          <p>{item.timetaken} s</p>
        </li>
      </div>
    );
  });

  useEffect(() => {
    if (isLoading) {
      const setupData = async () => {
        const data = await context.fb.getLeaderboard();
        const sortedLeaderboard = [];
        data.forEach((element) => {
          sortedLeaderboard.push(element);
        });
        setLeaderboard(() => {
          return sortedLeaderboard.sort((firstEl, secondEl) => {
            return firstEl.timetaken > secondEl.timetaken;
          });
        });
      };
      setupData();
      setLoading(false);
    }
  }, [context.fb, isLoading]);
  return (
    <div className="boardWrap">
      <div className="listWrap">
        <ul>{boardElement}</ul>
      </div>
    </div>
  );
};

export default Leaderboard;
