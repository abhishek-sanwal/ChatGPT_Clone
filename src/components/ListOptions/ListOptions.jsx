import bookmark from '../../assets/bookmark.svg';
import home from '../../assets/home.svg';
import rocket from '../../assets/rocket.svg';
import styles from './ListOptions.module.css';
function ListOptions() {
  return (
    <div className={styles.sidebarLowerList}>
      <div className={styles.sidebarLowerListElement}>
        <img className={styles.ListOptionsElementPic} src={home} alt='Home' />
        <p>Home</p>
      </div>
      <div className={styles.sidebarLowerListElement}>
        <img
          className={styles.ListOptionsElementPic}
          src={bookmark}
          alt='Saved'
        />
        <p>Saved</p>
      </div>
      <div className={styles.sidebarLowerListElement}>
        <img
          className={styles.ListOptionsElementPic}
          src={rocket}
          alt='Upgrade to pro'
        />
        <p>Upgrade to Pro</p>
      </div>
    </div>
  );
}

export default ListOptions;
