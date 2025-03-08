import styles from "./Link.module.css";

export default function Link({ children, onClick }) {
  return (
    <a href="#" className={styles.link} onClick={onClick}>
      {children}
    </a>
  );
}
