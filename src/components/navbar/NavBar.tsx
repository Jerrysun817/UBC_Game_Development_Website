import { Link } from "react-router-dom";
import logo from "../../assets/gameDevIcon.png";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <nav>
      <div
        className={`relative flex items-center bg-black w-full z-50 h-[150px] px-6`}
      >
        <div className="absolute left-6">
          <Link to="/">
            <img src={logo} className="w-20 h-20" />
          </Link>
        </div>

        <div
          className={`${styles.navBarText} absolute left-0 right-0 mx-auto flex justify-center gap-6`}
          style={{ width: "fit-content" }}
        >
          <Link to="/about">About</Link>
          <Link to="/games">Games</Link>
          <Link to="/events">Events</Link>
          <Link to="/partners">Partners</Link>
        </div>

        <button className="btn text-white border-white border-2 py-2 px-6 rounded-lg absolute right-6 hover:bg-white hover:text-black">
          Join Our Discord
        </button>
      </div>
    </nav>
  );
};
