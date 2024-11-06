import { useEffect, useRef } from "react";

import ChatBox from "./ChatBox";
import ChatFooter from "./ChatFooter";
import { useChatContext } from "../context/ChatContext";
import { useGlobalRefContext } from "../context/GlobalRefContext";

function Main() {
  const { messages } = useChatContext();
  const { inputRef, chatsRef } = useGlobalRefContext();

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
    <>
      {/* Displays ALl previous chats messages */}
      <ChatBox />
      {/* Displays a box to ask question and a footer message */}
      <ChatFooter />
    </>
  );
}

export default Main;
