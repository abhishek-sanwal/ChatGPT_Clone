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

import { useEffect, useState } from "react";

import message from "../assets/message.svg";
import styles from "./Suggestions.module.css";

function Suggestions() {
  // const [height, setHeight] = useState(() => calculate);

  // function calculate() {
  //   if (sideBarUpper.current) {
  //     const sideBarUpperHeight =
  //       sideBarUpper.current.getBoundingClientRect().height;
  //     const logoHeight = logo.current.getBoundingClientRect().height;
  //     const actionButtonHeight =
  //       actionButton.current.getBoundingClientRect().height;
  //     console.log(sideBarUpperHeight, logoHeight, actionButtonHeight);
  //     setHeight(sideBarUpperHeight - logoHeight - actionButtonHeight - 48);
  //   }
  // }

  // useEffect(function () {
  //   calculate();
  //   window.addEventListener("resize", calculate);

  //   return () => window.removeEventListener("resize", calculate);
  // }, []);

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
