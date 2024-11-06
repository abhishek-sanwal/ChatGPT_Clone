const suggestions = [
  {
    id: 1,
    question: "What is Programming?",
  },
  {
    id: 2,
    question: "How to use API?",
  },
  {
    id: 3,
    question: "What is ReactJS?",
  },
  {
    id: 4,
    question: "Why js is so popular?",
  },
  {
    id: 5,
    question: "What is Principal component Analysis(PCA)?",
  },
  {
    id: 6,
    question: "How to reduce hallucinations in GenAi models?",
  },
];

import message from "../assets/message.svg";
import styles from "./Suggestions.module.css";

function Suggestions() {
  return (
    <div className={styles.suggestionsBox} role="button">
      {suggestions.map((suggestion) => {
        return (
          <div className={styles.suggestion} key={suggestion.id}>
            <img src={message} alt="" />
            <p>{suggestion.question}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
