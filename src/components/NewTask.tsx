import { FormEvent, useState } from "react";
import { TasksProps } from "../App";

import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

interface NewTasksProps {
  tasks: TasksProps[];
  onAddNewTask: (title: string) => void;
}

export function NewTask({ onAddNewTask }: NewTasksProps) {
  const [title, setTitle] = useState("");
  const isInvalidTitle = title === "";

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onAddNewTask(title);
    setTitle("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          maxLength={70}
          type="text"
          placeholder="Add a new task..."
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <button type="submit" disabled={isInvalidTitle}>
          Add
          <PlusCircle size={20} weight="bold" />
        </button>
      </form>
    </div>
  );
}
