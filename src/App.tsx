import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Task";

import "./global.css";

// ----------------------------------------------------------------

const LOCAL_STORAGE_KEY = "todoCreatedTasks";

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  const loadTasks = () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const saveCreatedTasks = (savedTasks: TasksProps[]) => {
    setTasks(savedTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(savedTasks));
  };

  const addNewTask = (title: string) => {
    saveCreatedTasks([
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
    saveCreatedTasks(tasksWithoutCompletedOnes);
  };

  const removeTask = (id: string) => {
    const tasksWithoutRemovedOnes = tasks.filter((task) => task.id !== id);
    saveCreatedTasks(tasksWithoutRemovedOnes);
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
