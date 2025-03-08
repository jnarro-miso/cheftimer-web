import styles from "./Home.module.css";
import "@material/web/button/filled-button.js";
import Card from "../Card/Card";

export default function Home() {
  const sectionTitles = [
    "Alarmas\n Activas",
    "Dispositivos\n Conectados",
    "Alarmas\n Completadas",
  ];

  const alarmTitles = ["Hornear pollo", "Pasta al dente", "Arroz"];

  return (
    <div className={styles.container}>
      <Card alignItems="center" justifyContent="space-between">
        <div className={styles.message}>
          <h2>¿Quieres crear nuevas alarmas?</h2>
          <p>Descarga nuestra app móvil para acceder a estas funcionalidades</p>
        </div>
        <md-filled-button type="button">Descargar app</md-filled-button>
      </Card>

      <div className={styles.cardContainer}>
        {sectionTitles.map((title, index) => (
          <Card
            width="200px"
            height="170px"
            padding="12px 20px"
            flexDirection="column"
            justifyContent="space-between"
          >
            <h2 className="heading-font">{title}</h2>
            <p className="body-font">{index + 3}</p>
          </Card>
        ))}
      </div>

      <Card height="inherit" padding="20px" flexDirection="column">
        <h1 className={`heading-font ${styles.title}`}>Alarmas Activas</h1>
        <div className={styles.alarms}>
          {alarmTitles.map((title) => (
            <Card width="100%" padding="12px" flexDirection="column">
              <h3>{title}</h3>
              <div className={styles.alarmDetails}>
                <p>Tiempo restante {Math.floor(Math.random() * 10)}:00</p>
                <p>Creado desde Samsung A55</p>
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
}
