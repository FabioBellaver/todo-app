import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Task";

import "./global.css";

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  console.log(tasks);

  const addNewTask = (title: string) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        title: title,
        isCompleted: false,
      },
    ]);
  };

  const setCompletedTask = (id: string) => {
    const tasksWithoutCompletedOnes = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasks(tasksWithoutCompletedOnes);
  };

  const removeTask = (id: string) => {
    const tasksWithoutRemovedOnes = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutRemovedOnes);
  };

  return (
    <>
      <Header />
      <NewTask tasks={tasks} onAddNewTask={addNewTask} />
      <Tasks
        tasks={tasks}
        onComplete={setCompletedTask}
        onRemove={removeTask}
      />
    </>
  );
}

export default App;
