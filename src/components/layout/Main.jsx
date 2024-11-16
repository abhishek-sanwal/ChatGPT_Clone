import ChatBox from '../ChatBox/ChatBox';
import ChatFooter from '../ChatFooter/ChatFooter';

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
