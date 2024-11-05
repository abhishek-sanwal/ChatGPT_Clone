import logo from "../assets/chatgptLogo.svg";
import styles from "./Chats.module.css";
import userIcon from "../assets/user-icon.png";
function Chats({ messages }) {
  return (
    <>
      {messages.map((element) => (
        <>
          <div className={styles.questionBox}>
            <img src={userIcon} alt="Random Avatar Image" />
            <p>{element.question}</p>
          </div>
          <div className={styles.answerBox}>
            <img src={logo} alt="Random Avatar Image" />
            <p> {element.response}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default Chats;
