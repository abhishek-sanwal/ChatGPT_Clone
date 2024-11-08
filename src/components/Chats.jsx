import "prismjs";
import "prismjs/themes/prism-holi-theme.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-css";
import "prismjs/components/prism-csv";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-git";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-mongodb";
import "prismjs/components/prism-python";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";
import "md-block";

import TypewriterComponent from "./TypewriterComponent";
import logo from "../assets/chatgptLogo.svg";
import styles from "./Chats.module.css";
import { useChatContext } from "../context/ChatContext";
import { useGlobalRefContext } from "../context/GlobalRefContext";
import userIcon from "../assets/user-icon.png";

function Chats() {
  const { chatsRef } = useGlobalRefContext();
  const { messages } = useChatContext();
  return (
    <>
      {messages?.map((element, index) => (
        <>
          <div className={styles.questionBox} key={crypto.randomUUID}>
            <img src={userIcon} alt="Random Avatar Image" />
            <p>{element.question}</p>
          </div>
          <div
            ref={chatsRef}
            className={styles.answerBox}
            key={crypto.randomUUID}
          >
            <img src={logo} alt="Random Avatar Image" />
            {/* No Response or response is loading */}
            {!element.response || element.response === "Loading..." ? (
              <p>{element.response}</p>
            ) : index === messages.length - 1 ? (
              <TypewriterComponent data={element.response} />
            ) : (
              <md-block>{element.response}</md-block>
            )}
          </div>
        </>
      ))}
    </>
  );
}

export default Chats;
