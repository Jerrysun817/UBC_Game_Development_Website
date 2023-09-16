import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import Button from "../Button/Button";
import { MenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";

import { useState } from "react";
import { Menu } from "@mui/base/Menu";

export const NavBar = () => {
  const [isEventsOpen, setIsEventsOpen] = useState(false);
  return (
    <>
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
            className={`${styles.navBarText} absolute left-0 right-0 mx-auto flex justify-center gap-6 `}
          >
            <Link className="hover:opacity-70 transition" to="/about">
              About
            </Link>
            <Dropdown open={isEventsOpen}>
              <div
                onMouseOver={() => {
                  setIsEventsOpen(true);
                }}
                onMouseLeave={() => {
                  setIsEventsOpen(false);
                }}
              >
                <Link className="hover:opacity-70 transition" to="/events">
                  Events
                </Link>

                <Menu className="absolute pt-6 bg-black bg-opacity-30 backdrop-blur-md">
                  <MenuItem>
                    <Link
                      className="hover:opacity-70 transition"
                      to="/gameon-conference"
                    >
                      GAMEON CONFERENCE
                    </Link>
                  </MenuItem>
                  <MenuItem className="pt-2">
                    <Link
                      className="hover:opacity-70 transition"
                      to="/yearend-showcase"
                    >
                      YEAR-END SHOWCASE
                    </Link>
                  </MenuItem>
                  <MenuItem className="pt-2">
                    <Link
                      className="hover:opacity-70 transition"
                      to="/launch-party"
                    >
                      LAUNCH PARTY
                    </Link>
                  </MenuItem>
                  <MenuItem className="pt-2">
                    <Link
                      className="hover:opacity-70 transition"
                      to="/community-events"
                    >
                      COMMUNITY EVENTS
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            </Dropdown>
            <Link className="hover:opacity-70 transition" to="/games">
              Games
            </Link>

            <Link className="hover:opacity-70 transition" to="/partners">
              Partners
            </Link>
          </div>

          <Button className="bg-transparent text-white border-2 py-2 px-6 absolute right-6 text font-normal md:block hidden ">
            Join our Discord Server
          </Button>
        </div>
        <div></div>
      </nav>
    </>
  );
};
