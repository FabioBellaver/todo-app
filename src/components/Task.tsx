import { useState } from "react";
import { TaskItem } from "./TaskItem";
import { TasksProps } from "../App";

import styles from "./Task.module.css";
import clipboard from "../assets/clipboard.svg";

interface TasksPropsFromParent {
  tasks: TasksProps[];
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

export function Tasks({ tasks, onComplete, onRemove }: TasksPropsFromParent) {
  const notHaveTasks = tasks.length === 0;
  const tasksQuantity = tasks.length;
  const completedTasksQuantity = tasks.filter(
    (task) => task.isCompleted
  ).length;

  return (
    <>
      <main className={styles.container}>
        <div className={styles.data}>
          <span className={styles.created}>
            Created tasks{" "}
            <span className={styles.quantityCreated}>{tasksQuantity}</span>
          </span>
          <span className={styles.completed}>
            Completed{" "}
            <span className={styles.quantityCompleted}>
              {completedTasksQuantity} of {tasksQuantity}
            </span>
          </span>
        </div>
        {notHaveTasks ? (
          <div className={styles.Tasks}>
            <div className={styles.notHaveTasksText}>
              <img src={clipboard} alt="Clipboard icon" />
              <strong>You don't have any tasks registered yet</strong>
              <p>Create tasks and organize your to-do items</p>
            </div>
          </div>
        ) : (
          <div>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onComplete={onComplete}
                onRemove={onRemove}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
