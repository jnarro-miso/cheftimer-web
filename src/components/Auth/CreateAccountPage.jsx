import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";
import styles from "./CreateAccountPage.module.css";
import Logo from "../../components/Logo/Logo";

export default function CreateAccountPage({ onAccountCreated }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAccountCreated();
  };

  return (
    <div className={styles.loginContainer}>
      <Logo />

      <h1 className={`heading-font ${styles.title}`}>Crea tu cuenta</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <md-outlined-text-field label="Nombre de usuario"></md-outlined-text-field>
        <md-outlined-text-field label="Email"></md-outlined-text-field>
        <md-outlined-text-field label="Contraseña"></md-outlined-text-field>
        <md-outlined-text-field label="Repetir contraseña"></md-outlined-text-field>

        <div className={styles.buttonWrapper}>
          <md-filled-button type="submit">Crear tu cuenta</md-filled-button>
        </div>
      </form>
    </div>
  );
}
