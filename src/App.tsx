import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <Task />
    </>
  );
}

export default App;
