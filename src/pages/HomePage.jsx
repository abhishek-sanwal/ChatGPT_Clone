import '../App.css';

import { useEffect, useRef, useState } from 'react';

import Button from '../components/Button';
import { ChatContextProvider } from '../context/ChatContext';
import DeleteButton from '../components/DeleteButton';
import { FiMenu } from 'react-icons/fi';
import { GlobalRefContextProvider } from '../context/GlobalRefContext';
import Main from '../components/layout/Main';
import SidebarLower from '../components/layout/SidebarLower';
import SidebarUpper from '../components/layout/SidebarUpper';

function HomePage() {
  const [sidebar, setSidebar] = useState(false);

  // Sidebar menu button ref
  const menuRef = useRef();

  // main content ref
  const mainRef = useRef();

  // Hide sidebar if clicked outside
  useEffect(function () {
    function hideToggleBar(event) {
      if (
        // Clicked on main element
        mainRef?.current?.contains(event.target) &&
        // But not on menu icon
        event.target !== menuRef?.current
      ) {
        // hide
        setSidebar(false);
      }
    }

    document.addEventListener('click', hideToggleBar);
    return () => document.removeEventListener('click', hideToggleBar);
  }, []);

  useEffect(function () {
    // Hide scrollbar when window is large enough
    function automaticallyHideSideBar() {
      if (window.innerWidth >= 950) {
        setSidebar(false);
      }
    }

    window.addEventListener('resize', automaticallyHideSideBar);
    // On Unmounting remove event listener
    return () => window.removeEventListener('resize', automaticallyHideSideBar);
  }, []);

  // Toggle Sidebar
  function handleClick() {
    setSidebar(!sidebar);
  }

  return (
    // Full App
    <section className='app'>
      {/* Chat Context  */}
      <ChatContextProvider>
        {/* Global ref   */}
        <GlobalRefContextProvider>
          {/* Left Sidebar  */}
          <section
            // Display it only when sidebar is on on sm screens
            style={{
              display: sidebar ? 'grid' : '',
            }}
            className={`sidebar ${sidebar ? 'menuClicked' : ''}`}
          >
            {/* Left Sidebar Upper Portion */}
            <section className='sidebar--upper'>
              <SidebarUpper sidebar={sidebar} setSidebar={setSidebar} />
            </section>
            {/* Left Sidebar Lower Portion */}
            <section className='sidebar--lower'>
              <SidebarLower />
            </section>
          </section>
          {/* Right Side Main Content */}
          <main className='main-content' ref={mainRef}>
            {/* Menu Button visible on sm screens */}
            <Button
              styleClass='menu'
              buttonRef={menuRef}
              handleClick={handleClick}
            >
              {/* Show Open Sidebar icon  */}
              {!sidebar && (
                <FiMenu style={{ fontSize: '22px' }} title='Open Menu' />
              )}
            </Button>

            {/* Show a delete button to delete all data */}
            <DeleteButton styleClass='dataButton'>Delete My Data</DeleteButton>
            <Main />
          </main>
        </GlobalRefContextProvider>
      </ChatContextProvider>
    </section>
  );
}

export default HomePage;
