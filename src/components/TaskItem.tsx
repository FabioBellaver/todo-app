import { useState } from "react";

import { Trash } from "phosphor-react";
import styles from "./TaskItem.module.css";

interface TaskItemProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

export function TaskItem({ task, onComplete, onRemove }: TaskItemProps) {
  const isCompletedTask = task.isCompleted;

  const handleCompletedTask = () => {
    onComplete(task.id);
  };

  const handleRemovedTask = () => {
    const confirmDelete = window.confirm(`Delete the task "${task.title}"?`);
    if (confirmDelete) {
      onRemove(task.id);
    }
    onRemove(task.id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.checkbox}>
          <input type="checkbox" id={task.id} onClick={handleCompletedTask} />
          <label
            htmlFor={task.id}
            className={
              isCompletedTask ? styles.completdTask : styles.incompleteTask
            }
          >
            {task.title}
          </label>
        </div>
        <button onClick={handleRemovedTask}>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
