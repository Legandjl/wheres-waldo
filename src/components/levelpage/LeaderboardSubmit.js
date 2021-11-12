import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/useGameContext";
import { useNavigate } from "react-router-dom";

const LeaderboardSubmit = (props) => {
  const nav = useNavigate();
  const context = useContext(GameContext);
  const [name, setName] = useState("");
  const [timeTaken, setTimeTaken] = useState("JJ");
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmit] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeTaken(() => {
        return context.fb.getTimeTaken(props.startTime);
      });
      setLoading(false);
    }
  }, [context.fb, loading, props.startTime]);

  const handleChange = (e) => {
    const val = e.target.value;
    setName(() => {
      return val;
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    await context.fb.pushToLeaderboard(name, timeTaken);
    nav("/leaderboard", { replace: true });
  };
  return (
    <div className="submitWrap">
      <form onSubmit={handleSubmit}>
        <p>You found all the Pokemon!</p>
        <p>You took {timeTaken} seconds </p>
        <input
          className="usernameInput"
          placeholder="Enter username"
          value={name}
          onChange={handleChange}
        />
        <br />
        <button disabled={submitted && !loading}>Submit</button>{" "}
      </form>
    </div>
  );
};

export default LeaderboardSubmit;
