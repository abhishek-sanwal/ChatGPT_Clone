import "prismjs";
import "prismjs/themes/prism-holi-theme.css";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-java.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-c.min.js";
import "md-block";

import TypewriterComponent from "./TypewriterComponent";
import logo from "../assets/chatgptLogo.svg";
import styles from "./Chats.module.css";
import userIcon from "../assets/user-icon.png";

function Chats({ messages, chatsRef }) {
  return (
    <>
      {messages.map((element) => (
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
            {/* For Markdown effect */}
            {!element.response || element.response === "Loading..." ? (
              <p>{element.response}</p>
            ) : (
              <md-block>{element.response}</md-block>
            )}

            {/* For TypeWriter effect */}
            {/* <TypeWriter
                options={{
                  autoStart: true,
                  delay: 2500,
                  strings: `${element.response}`,
                }}
              /> */}
          </div>
        </>
      ))}
    </>
  );
}

export default Chats;
