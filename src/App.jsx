import { useState } from "react";
import styles from "./App.module.css";
import LoginPage from "./components/Auth/LoginPage";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import History from "./components/History/History";

function App() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleLogin = () => {
    setCurrentPage("home");
    setShowMainApp(true);
  };

  const handleLogout = () => {
    setShowMainApp(false);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  if (!showMainApp) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "history":
        return <History />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Layout>
        <Menu onLogout={handleLogout} />
        <div className={styles.contentWrapper}>
          <Navbar onNavigate={handleNavigate} />
          <div className={styles.pageContent}>{renderContent()}</div>
        </div>
      </Layout>
    </>
  );
}

export default App;
