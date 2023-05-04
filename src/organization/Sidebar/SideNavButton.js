import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import * as FiIcons from "react-icons/fi";

function SidebarOrg(props) {
  const { setIsLoggedIn } = props;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="fixed top-0 left-0 w-full bg-gray-900">
          <div className="flex justify-between items-center py-4 px-6">
            <Link to="/">
              <h1 className="text-lg font-bold text-white">Your Logo Here</h1>
            </Link>
            <button onClick={showSidebar}>
              <Hamburger
                direction="right"
                duration={0.6}
                color={"#fff"}
                toggled={sidebar}
                rounded
              />
            </button>
          </div>
        </div>
        <nav
          className={`${
            sidebar ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 h-full w-60 z-20 bg-gray-900 text-white transition-transform ease-in-out duration-300`}
        >
          <div className="pt-16">
            <ul>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="block py-2 px-6 hover:bg-gray-800"
                      onClick={closeSidebar}
                    >
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="absolute bottom-0 w-full">
            <ul className="pb-6">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-6 hover:bg-gray-800"
                  onClick={() => {
                    setIsLoggedIn(false);
                  }}
                >
                  <span className="mr-3">
                    <FiIcons.FiLogOut />
                  </span>
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SidebarOrg;
