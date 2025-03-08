import Card from "../Card/Card";
import "@material/web/chips/chip-set.js";
import "@material/web/chips/filter-chip.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./History.module.css";

export default function History() {
  function createData(name, date, duration, device) {
    return { name, date, duration, device };
  }

  const rows = [
    createData("Avena", "06 Feb 25, 09:10", "00:05:00", "Samsung A55"),
    createData("Batido", "06 Feb 25, 10:10", "00:03:00", "Samsung A55"),
    createData("Hornear pollo", "06 Feb 25, 14:30", "00:12:00", "Samsung A55"),
  ];

  return (
    <div className={styles.container}>
      <Card height="100%" padding="20px" flexDirection="column">
        <h1 className={`heading-font ${styles.title}`}>Historial de Alarmas</h1>

        <div className={styles.chipContainer}>
          <md-chip-set>
            <md-filter-chip label="Hoy" selected></md-filter-chip>
            <md-filter-chip label="Esta semana" soft-disabled></md-filter-chip>
            <md-filter-chip label="Este mes" soft-disabled></md-filter-chip>
          </md-chip-set>
        </div>

        <TableContainer
          sx={{
            borderRadius: "12px",
            background: "#FAF9FA",
            "& .MuiTableRow-root": {
              height: "40px",
            },
            "& .MuiTableCell-root": {
              color: "#1A1C1D",
              padding: "0 16px",
              fontSize: "16px",
              borderBottom: "none",
            },
            "& .MuiTableCell-head": {
              fontWeight: 600,
              borderBottom: "1px solid #E5E5E5",
            },
          }}
        >
          <Table
            sx={{
              minWidth: 650,
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Fecha</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Duración</TableCell>
                <TableCell>Dispositivo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.duration}</TableCell>
                  <TableCell>{row.device}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
}
