import Chats from "./Chats";

function ChatBox({ messages, chatsRef }) {
  return (
    <div
      style={{
        overflow: "scroll",
        maxHeight: "70vh",
        marginBottom: "2.2rem",
      }}
      className="chatBox"
    >
      <Chats messages={messages} chatsRef={chatsRef} />
    </div>
  );
}

export default ChatBox;
