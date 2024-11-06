import { createContext, useContext, useRef } from "react";

const globalRefContext = createContext();

function GlobalRefContextProvider({ children }) {
  const chatsRef = useRef();
  const inputRef = useRef();

  return (
    <globalRefContext.Provider
      value={{
        chatsRef,
        inputRef,
      }}
    >
      {children}
    </globalRefContext.Provider>
  );
}

function useGlobalRefContext() {
  const context = useContext(globalRefContext);
  if (context === undefined) {
    throw new Error(" Invalid!!!");
  }
  return context;
}

export { GlobalRefContextProvider, useGlobalRefContext };
