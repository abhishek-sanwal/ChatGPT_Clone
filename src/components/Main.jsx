import { useEffect, useRef, useState } from "react";

import ChatBox from "./ChatBox";
import ChatFooter from "./ChatFooter";

function Main() {
  const [messages, setMessages] = useState([
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore harum consequuntur sed ut minima cupiditate et eligendi beatae atque ipsa laudantium nihil sequi voluptatem saepe repudiandae, quae incidunt rerum.",
      response: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius maxime! Vero, sed quidem! Accusamus eveniet ratione ipsam voluptatibus quae magni amet ducimus expedita laudantium? Repellendus libero accusamus quasi ipsa!
      Quidem quo asperiores non, sit esse iste illum corrupti. Praesentium mollitia perferendis exercitationem veritatis deleniti necessitatibus numquam culpa molestiae ipsam porro assumenda quasi accusamus animi, ullam at iste repellendus est?
      Mollitia eum, pariatur reiciendis quasi deserunt aperiam tempore aliquam modi ea aut consequuntur tenetur culpa doloremque vitae ducimus alias explicabo assumenda molestiae, recusandae quaerat fugit voluptatum a accusamus. Nam, explicabo. `,
    },
  ]);
  const chatsRef = useRef();
  const inputRef = useRef();

  // Add message
  function addMessage({ question, response = "Loading..." }) {
    setMessages([
      ...messages,
      {
        question,
        response,
      },
    ]);
  }

  // Update existing message
  function updateMessage({ question, response }) {
    const newMessages = [...messages, { question, response }];
    setMessages(newMessages);
  }

  // Should run only on mount
  useEffect(function () {
    // Default focus should be on input element
    inputRef.current?.focus();
  }, []);

  useEffect(
    () =>
      async function () {
        // Scroll to latest question and answer automatically on mount or when there is a change in messages
        chatsRef.current.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      },
    [messages]
  );

  return (
    <>
      {/* Displays ALl previous chats messages */}
      <ChatBox messages={messages} chatsRef={chatsRef} />
      {/* Displays a box to ask question and a footer message */}
      <ChatFooter
        inputRef={inputRef}
        messages={messages}
        onAddMessage={addMessage}
        onUpdateMessage={updateMessage}
      />
    </>
  );
}

export default Main;
