import "../App.css";

import { useEffect, useRef, useState } from "react";

import { ChatContextProvider } from "../context/ChatContext";
import DeleteButton from "../components/DeleteButton";
import { FiMenu } from "react-icons/fi";
import { GlobalRefContextProvider } from "../context/GlobalRefContext";
import Main from "../components/Main";
import MenuButton from "../components/MenuButton";
import SidebarLower from ".././components/SidebarLower";
import SidebarUpper from ".././components/SidebarUpper";

function HomePage() {
  const [sidebar, setSidebar] = useState(false);

  const menuRef = useRef();
  const mainRef = useRef();

  useEffect(function () {
    function hideToggleBar(event) {
      if (
        mainRef.current &&
        menuRef.current &&
        // Clicked on main element
        mainRef.current.contains(event.target) &&
        // But not on menu icon
        event.target !== menuRef.current
      ) {
        setSidebar(false);
      }
    }

    document.addEventListener("click", hideToggleBar);
    return () => document.removeEventListener("click", hideToggleBar);
  }, []);

  useEffect(function () {
    function automaticallyHideSideBar() {
      if (window.innerWidth >= 950) {
        setSidebar(false);
      }
    }

    window.addEventListener("resize", automaticallyHideSideBar);
    return () => window.removeEventListener("resize", automaticallyHideSideBar);
  }, []);

  function handleClick() {
    setSidebar(!sidebar);
  }

  return (
    // Full App
    <section className="app">
      <ChatContextProvider>
        <GlobalRefContextProvider>
          {/* Left Sidebar  */}
          <section
            // Display it only when sidebar is on
            style={{
              display: sidebar ? "grid" : "",
            }}
            className={`sidebar ${sidebar ? "menuClicked" : ""}`}
          >
            {/* Left Sidebar Upper Portion */}
            <section className="sidebar--upper">
              <SidebarUpper sidebar={sidebar} setSidebar={setSidebar} />
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
              {!sidebar && (
                <FiMenu style={{ fontSize: "22px" }} title="Open Menu" />
              )}
            </MenuButton>

            <DeleteButton styleClass="dataButton">Delete My Data</DeleteButton>
            <Main />
          </main>
        </GlobalRefContextProvider>
      </ChatContextProvider>
    </section>
  );
}

export default HomePage;
