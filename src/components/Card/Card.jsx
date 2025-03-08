import styles from "./Card.module.css";

export default function Card({
  children,
  display = "flex",
  flexDirection = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  height = "auto",
  width = "100%",
  padding = "12px",
}) {
  const dynamicStyles = {
    display,
    flexDirection,
    alignItems,
    justifyContent,
    height,
    width,
    padding,
  };

  return (
    <div className={styles.card} style={dynamicStyles}>
      {children}
    </div>
  );
}
