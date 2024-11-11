import "../App.css";

import { useEffect, useRef, useState } from "react";

import { ChatContextProvider } from "../context/ChatContext";
import DeleteButton from "../components/DeleteButton";
import { FiMenu } from "react-icons/fi";
import { GlobalRefContextProvider } from "../context/GlobalRefContext";
import Main from "../components/Main";
import { MdClose } from "react-icons/md";
import MenuButton from "../components/MenuButton";
import SidebarLower from ".././components/SidebarLower";
import SidebarUpper from ".././components/SidebarUpper";

function HomePage() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const menuRef = useRef();
  const mainRef = useRef();

  useEffect(function () {
    function hideToggleBar(event) {
      console.log(
        menuRef.current,
        mainRef.current,
        event.target,
        mainRef.current.contains(event.target),
        event.target !== menuRef.current
      );
      if (
        mainRef.current &&
        menuRef.current &&
        // Clicked on main element
        mainRef.current.contains(event.target) &&
        // But not on menu icon
        event.target !== menuRef.current
      ) {
        setToggleSidebar(false);
      }
    }

    document.addEventListener("click", hideToggleBar);
    return () => document.removeEventListener("click", hideToggleBar);
  }, []);

  useEffect(function () {
    function hideToggleBar() {
      if (window.innerWidth >= 800) {
        setToggleSidebar(false);
      }
    }

    window.addEventListener("resize", hideToggleBar);
    return () => window.removeEventListener("resize", hideToggleBar);
  }, []);

  function handleClick() {
    setToggleSidebar(!toggleSidebar);
  }

  return (
    // Full App
    <div className="app">
      <ChatContextProvider>
        <GlobalRefContextProvider>
          {/* Left Sidebar  */}
          <section
            style={{
              display: toggleSidebar ? "grid" : "",
            }}
            className={`sidebar ${toggleSidebar ? "menuClicked" : ""}`}
          >
            {/* Left Sidebar Upper Portion */}
            <section className="sidebar--upper">
              <SidebarUpper />
            </section>
            {/* Left Sidebar Lower Portion */}
            <section className="sidebar--lower">
              <SidebarLower />
            </section>
          </section>
          {/* Right Side Main Content */}
          <main className="main-content" ref={mainRef}>
            <MenuButton
              menuRef={menuRef}
              handleClick={handleClick}
              styleClass="menu"
            >
              {toggleSidebar ? (
                <MdClose
                  style={{
                    height: "48px",
                  }}
                />
              ) : (
                <FiMenu
                  style={{
                    height: "48px",
                  }}
                />
              )}
            </MenuButton>

            <DeleteButton styleClass="dataButton">Delete My Data</DeleteButton>
            <Main />
          </main>
        </GlobalRefContextProvider>
      </ChatContextProvider>
    </div>
  );
}

export default HomePage;
