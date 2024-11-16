const message = '*ChatGPT can make mistakes. Check important information';

const version = 'August 10';

import { memo, useState } from 'react';

import Button from '../Button';
import send from '../../assets/send.svg';
import styles from './ChatFooter.module.css';
import { useChatContext } from '../../context/ChatContext';
import { useGlobalRefContext } from '../../context/GlobalRefContext';

function ChatFooter() {
  // Local State
  const [question, setQuestion] = useState('');

  // Global States
  const { getResponse, messages } = useChatContext();
  // Global ref
  const { inputRef } = useGlobalRefContext();

  // Function to get llm response
  async function handleSubmit(event) {
    event.preventDefault();
    getResponse({
      question,
      startNewChat: messages.length === 0,
    });
    setQuestion('');
  }

  return (
    <div className={styles.footer}>
      <form
        className={styles.inputBoxWrapper}
        onSubmit={event => handleSubmit(event)}
        aria-label='Form to ask Questions to Chatgpt'
      >
        <input
          type='text'
          ref={inputRef}
          className={styles.inputBox}
          placeholder='Message ChatGPT'
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
        <Button>
          <img
            className={styles.chatFooterImage}
            src={send}
            alt='Ask ChatGPT'
          />
        </Button>
      </form>
      <p
        className={styles.footerMessage}
      >{`${message}. ChatGPT ${version} Version`}</p>
    </div>
  );
}

export default memo(ChatFooter);
