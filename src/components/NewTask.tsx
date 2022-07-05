import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css"

export function NewTask() {
  return (
    <>
    <div className={styles.container}>
      <form action="">
        <input type="text" placeholder="Add a new task..." />
        <button type="submit">
          Add
          <PlusCircle size={16} weight="bold"/>
        </button>
      </form>
    </div>
    </>
  )
}