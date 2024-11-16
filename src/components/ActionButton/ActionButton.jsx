import { addChat, useChatContext } from '../../context/ChatContext';

import addLogo from '../../assets/add-30.png';
import styles from './ActionButton.module.css';

function ActionButton() {
  const { messages, dispatch } = useChatContext();

  function handleClick() {
    //  Should have at least one message
    if (messages.length > 0) dispatch(addChat(messages));
  }

  return (
    <button className={styles.btnContainer} onClick={handleClick}>
      <img className={styles.btnImg} src={addLogo} alt='Add symbol' />
      <span>New Chat</span>
    </button>
  );
}

export default ActionButton;
