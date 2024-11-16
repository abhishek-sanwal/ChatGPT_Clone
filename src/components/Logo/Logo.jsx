import logoPic from '../../assets/chatgpt.svg';
import styles from './Logo.module.css';
function Logo() {
  return (
    // Main Logo of app
    <a href='#' className={styles.logoContainer}>
      <img src={logoPic} alt='Chatgpt logo' />
      <span> ChatGPT</span>
    </a>
  );
}

export default Logo;
