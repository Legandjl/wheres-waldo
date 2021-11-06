import { Link, Switch } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://fontmeme.com/permalink/211106/a9fd5ae30d7c11783969c14e596a36dd.png"
          alt="find the pokemon, pokemon font logo"
          border="0"
        />
      </Link>
    </div>
  );
};

export default Header;
