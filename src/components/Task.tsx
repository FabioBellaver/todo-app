import styles from "./Task.module.css";
import clipboard from "../assets/clipboard.svg";

export function Task() {
  return (
    <main className={styles.container}>
      <div className={styles.data}>
        <span className={styles.created}>
          Created tasks <span className={styles.quantityCreated}>0</span>
        </span>
        <span className={styles.completed}>
          Completed <span className={styles.quantityCompleted}>0</span>
        </span>
      </div>
      <div className={styles.notHaveTasks}>
        <img src={clipboard} alt="Clipboard icon" />
        <strong>You don't have any tasks registered yet.</strong>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </main>
  );
}
