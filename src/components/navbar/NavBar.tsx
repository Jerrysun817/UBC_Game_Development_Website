
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";

export const NavBar = () => {
  return (
    <nav>
      <div
        className={`relative flex items-center justify-center bg-black w-full z-50 h-[150px] px-6`}
      >
        <div className="absolute left-6 hover:opacity-70 transition">
          <Link to="/">
            <img src={logo} className="h-10" />
          </Link>
        </div>

        <div
          className={`${styles.navBarText} absolute left-0 right-0 mx-auto flex justify-center gap-6`}
          style={{ width: "fit-content" }}
        >
          <Link className="hover:opacity-70 transition" to="/about">About</Link>
          <Link className="hover:opacity-70 transition" to="/games">Games</Link>
          <Link className="hover:opacity-70 transition" to="/events">Events</Link>
          <Link className="hover:opacity-70 transition" to="/partners">Partners</Link>
        </div>

        <Button className="bg-transparent text-white border-2 py-2 px-6 absolute right-6 text font-normal">Join our Discord Server</Button>

      </div>
    </nav>
  );
};
