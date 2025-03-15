import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";
import styles from "./ForgotPasswordPage.module.css";
import Logo from "../../components/Logo/Logo";
import Link from "../../components/Link/Link";

export default function ForgotPasswordPage({ onGoToLogin, onPasswordReset }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPasswordReset();
  };

  return (
    <div className={styles.container}>
      <Logo />

      <h1 className={`heading-font ${styles.title}`}>Recuperar contraseña</h1>
      <p className={`body-font ${styles.indication}`}>
        Por favor ingresa tu email:
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <md-outlined-text-field label="Email"></md-outlined-text-field>

        <div className={styles.recoverPassword}>
          <md-filled-button type="submit">
            Recuperar contraseña
          </md-filled-button>
        </div>
        <p className={styles.goToLogin}>
          <Link onClick={() => onGoToLogin()}>Volver a Inicio</Link>
        </p>
      </form>
    </div>
  );
}
