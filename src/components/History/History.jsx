import Card from "../Card/Card";
import "@material/web/chips/chip-set.js";
import "@material/web/chips/filter-chip.js";
import styles from "./History.module.css";

export default function History() {
  return (
    <div className={styles.container}>
      <Card padding="20px" flexDirection="column">
        <h1 className={`heading-font ${styles.title}`}>Historial de Alarmas</h1>

        <md-chip-set>
          <md-filter-chip label="Hoy" selected></md-filter-chip>
          <md-filter-chip label="Esta semana" soft-disabled></md-filter-chip>
          <md-filter-chip label="Este mes" soft-disabled></md-filter-chip>
        </md-chip-set>
      </Card>
    </div>
  );
}
