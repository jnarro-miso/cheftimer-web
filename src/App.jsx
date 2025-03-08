import { useState } from "react";
import styles from "./App.module.css";
import LoginPage from "./components/Auth/LoginPage";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleLogin = () => {
    setShowMainApp(true);
  };

  const handleLogout = () => {
    setShowMainApp(false);
  };

  if (!showMainApp) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <>
      <Layout>
        <Menu onLogout={handleLogout} />
        <div className={styles.contentWrapper}>
          <Navbar />
          <div>
            <h1>Welcome to ChefTimer</h1>
            <p>Start cooking your favorite recipes now!</p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
