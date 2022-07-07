import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  taskId: string;
  taskContent: string;
}

export function TaskItem({taskId, taskContent}: TaskItemProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          <input type="checkbox" id={taskId} />
          <label htmlFor={taskId}>
            {taskContent}
          </label>
        </div>
        <button>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
