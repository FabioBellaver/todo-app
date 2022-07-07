import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

interface TasksProps {
  id: string;
  title: string;
  isChecked: boolean;
}
export function NewTask() {
  const [task, setTask] = useState("");

  const tasks = [] as TasksProps[];

  const handleNewTask = (event: FormEvent) => {
    event.preventDefault();
    tasks.push({
      id: uuidv4(),
      title: task,
      isChecked: false,
    });
    console.log(tasks);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleNewTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          onChange={(event) => setTask(event.target.value)}
        />
        <button type="submit">
          Add
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </div>
  );
}
