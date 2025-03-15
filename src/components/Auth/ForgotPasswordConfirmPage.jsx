import "@material/web/textfield/outlined-text-field.js";
import "@material/web/button/filled-button.js";
import styles from "./ForgotPasswordConfirmPage.module.css";
import Logo from "../../components/Logo/Logo";

export default function ForgotPasswordConfirmPage({ onGoToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onGoToLogin();
  };

  return (
    <div className={styles.container}>
      <Logo />

      <h1 className={`heading-font ${styles.title}`}>Recuperar contraseña</h1>
      <p className={`body-font ${styles.indication}`}>
        Hemos enviado un correo al email proporcionado.
        <br />
        Ingrese a su correo y establezca su nueva contraseña.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.buttonWrapper}>
          <md-filled-button type="submit">Regresar a Inicio</md-filled-button>
        </div>
      </form>
    </div>
  );
}
