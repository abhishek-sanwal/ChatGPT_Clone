import ChatBox from "./ChatBox";
import ChatFooter from "./ChatFooter";

function Main() {
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
