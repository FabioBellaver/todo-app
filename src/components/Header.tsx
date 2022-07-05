import appLogo from "../assets/app-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
        <img className={styles.logo} src={appLogo} alt="todo logo" />
    </header>
  );
}
