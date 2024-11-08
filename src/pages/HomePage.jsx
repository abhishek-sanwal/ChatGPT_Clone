import "../App.css";

import { ChatContextProvider } from "../context/ChatContext";
import { GlobalRefContextProvider } from ".././context/GlobalRefContext";
import Main from "../components/Main";
import SidebarLower from ".././components/SidebarLower";
import SidebarUpper from ".././components/SidebarUpper";

function HomePage() {
  return (
    // Full App
    <div className="app">
      <ChatContextProvider>
        {/* Left Sidebar  */}
        <section className="sidebar">
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

        {/* Global ref provider  */}
        <GlobalRefContextProvider>
          <main className="main-content">
            <Main />
          </main>
        </GlobalRefContextProvider>
      </ChatContextProvider>
    </div>
  );
}

export default HomePage;
