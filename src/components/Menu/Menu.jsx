import chefLogo from "../../assets/images/logo.svg";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.logoContainer}>
        <img src={chefLogo} className={styles.logo} alt="React logo" />
      </div>
      <div className={styles.actions}>
        <p className={styles.username}>Juan Pérez</p>
        <button className={styles.button}>Cerrar sesión</button>
      </div>
    </div>
  );
}
