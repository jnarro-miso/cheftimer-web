import styles from "./Navbar.module.css";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

export default function Navbar({ onNavigate }) {
  const mainItems = [
    {
      icon: <AccessTimeOutlinedIcon />,
      text: "Vista de alarmas",
      page: "home",
    },
    {
      icon: <TodayOutlinedIcon />,
      text: "Historial",
      page: "history",
    },
  ];

  const configItems = [
    {
      icon: <PersonOutlinedIcon />,
      text: "Perfil",
    },
    {
      icon: <SettingsOutlinedIcon />,
      text: "Personalización",
    },
    {
      icon: <MailOutlinedIcon />,
      text: "Notificaciones",
    },
  ];

  return (
    <div className={styles.navbar}>
      <Drawer
        sx={{
          flexShrink: 0,
          height: "100%",
          width: "270px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiDrawer-paper": {
            width: "250px",
            position: "relative",
            boxSizing: "border-box",
            borderRight: "none",
            paddingTop: "18px",
          },
          "& .MuiButtonBase-root": {
            borderRadius: "100px",
            "&:active, &:focus": {
              backgroundColor: "#E3EBF3",
            },
          },
          "& .MuiListItemText-primary": {
            color: "#42484C",
            fontSize: "14px",
            fontWeight: "500",
          },
          "& .MuiListItemText-secondary": {
            color: "#42484C",
            fontWeight: "500",
          },
          "& .MuiSvgIcon-root": {
            color: "#42484C",
            fontSize: "24px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItemText
            secondary={"Principal"}
            sx={{
              paddingLeft: "16px",
            }}
          />
          {mainItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => onNavigate(item.page)}
                autoFocus={index === 0}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "36px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItemText
            secondary={"Configuración"}
            sx={{
              paddingTop: "6px",
              paddingLeft: "16px",
            }}
          />
          {configItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    minWidth: "36px",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
