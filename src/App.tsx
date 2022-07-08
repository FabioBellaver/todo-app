import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Task";

import "./global.css";

interface TasksProps {
  id: string;
  title: string;
  isChecked: boolean;
}[]

function App() {

  return (
    <>
      <Header />
      <NewTask />
      <Tasks />
    </>
  );
}

export default App;
