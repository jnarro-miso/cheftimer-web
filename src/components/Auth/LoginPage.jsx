import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";
import styles from "./LoginPage.module.css";
import Logo from "../../components/Logo/Logo";
import Link from "../../components/Link/Link";

export default function LoginPage({
  onLogin,
  onCreateAccount,
  onForgotPassword,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className={styles.loginContainer}>
      <Logo />

      <h1 className={`heading-font ${styles.title}`}>Bienvenidos</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <md-outlined-text-field label="Email"></md-outlined-text-field>
        <md-outlined-text-field label="Contraseña"></md-outlined-text-field>
        <Link onClick={() => onForgotPassword()}>
          ¿Olvidaste tu contraseña?
        </Link>

        <div className={styles.buttonWrapper}>
          <md-filled-button type="submit">Iniciar sesión</md-filled-button>
        </div>
        <p className={styles.createAccount}>
          ¿No tienes cuenta?{" "}
          <Link onClick={() => onCreateAccount()}>Crea una</Link>
        </p>
      </form>
    </div>
  );
}
