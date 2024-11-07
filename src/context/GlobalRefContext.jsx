import { createContext, useContext, useEffect, useRef } from "react";

import { useChatContext } from "./ChatContext";

const globalRefContext = createContext();

function GlobalRefContextProvider({ children }) {
  const chatsRef = useRef();
  const inputRef = useRef();
  const { messages } = useChatContext();

  // Should run only on mount
  useEffect(function () {
    // Default focus should be on input element
    inputRef.current?.focus();
  }, []);

  useEffect(
    () =>
      async function () {
        // Scroll to latest question and answer automatically on mount
        //  or when there is a change in messages
        chatsRef.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      },
    [messages]
  );

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
