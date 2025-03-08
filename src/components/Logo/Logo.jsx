import styles from "./Logo.module.css";
import chefLogo from "../../assets/images/logo.svg";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={chefLogo} className={styles.logo} alt="ChefTimer logo" />
      <p className={`heading-font ${styles.tagline}`}>El tiempo es sabor</p>
    </div>
  );
}
