import code from '../../assets/code.svg';
import math from '../../assets/math.svg';
import query from '../../assets/query.svg';
import styles from './Suggestions.module.css';
import summary from '../../assets/summary.svg';
import { useChatContext } from '../../context/ChatContext';

// Pre-defined suggestions
const suggestions = [
  {
    id: 1,
    question: 'What is Chatgpt?',
    svg: query,
  },
  {
    id: 2,
    question: 'Summarize Text',
    svg: summary,
  },
  {
    id: 3,
    question: 'Add code Python',
    svg: code,
  },
  {
    id: 4,
    question: 'Math problems',
    svg: math,
  },
];

function Suggestions() {
  const { getResponse } = useChatContext();

  return (
    <div className={styles.suggestionBox}>
      {suggestions.map((suggestion, index) => (
        <div
          key={index}
          className={styles.suggestions}
          role='button'
          onClick={() => getResponse({ question: suggestion.question })}
        >
          <img src={suggestion.svg} alt={suggestion.svg} />
          <p>{suggestion.question}</p>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
