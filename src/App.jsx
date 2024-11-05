import "./App.css";

import Main from "./components/Main";
import SidebarLower from "./components/SidebarLower";
import SidebarUpper from "./components/SidebarUpper";

function App() {
  return (
    // Full App
    <div className="app">
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
      <main className="main-content">
        <Main />
      </main>
    </div>
  );
}

export default App;
