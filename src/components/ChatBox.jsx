import Chats from "./Chats";

function ChatBox({ messages }) {
  return (
    <div
      style={{
        overflow: "scroll",
        maxHeight: "70vh",
        marginBottom: "2.2rem",
      }}
      className="chatBox"
    >
      <Chats messages={messages} />
    </div>
  );
}

export default ChatBox;
