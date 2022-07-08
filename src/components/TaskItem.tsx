import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";


export function TaskItem() {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          <input type="checkbox" id="1"/>
          <label htmlFor="1">
            "nlblblb"
          </label>
        </div>
        <button>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
