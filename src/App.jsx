import { useState } from "react";
import styles from "./App.module.css";
import LoginPage from "./components/Auth/LoginPage";
import CreateAccountPage from "./components/Auth/CreateAccountPage";
import ForgotPasswordPage from "./components/Auth/ForgotPasswordPage";
import ForgotPasswordConfirmPage from "./components/Auth/ForgotPasswordConfirmPage";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import History from "./components/History/History";

function App() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleLogin = () => {
    setCurrentPage("home");
    setShowMainApp(true);
  };

  const handleLogout = () => {
    setCurrentPage("login");
    setShowMainApp(false);
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  if (!showMainApp) {
    if (currentPage === "login") {
      return (
        <LoginPage
          onLogin={handleLogin}
          onCreateAccount={() => handleNavigate("createAccount")}
          onForgotPassword={() => handleNavigate("forgotPassword")}
        />
      );
    } else if (currentPage === "createAccount") {
      return <CreateAccountPage onAccountCreated={handleLogin} />;
    } else if (currentPage === "forgotPassword") {
      return (
        <ForgotPasswordPage
          onGoToLogin={() => handleNavigate("login")}
          onPasswordReset={() => handleNavigate("forgotPasswordConfirm")}
        />
      );
    } else if (currentPage === "forgotPasswordConfirm") {
      return (
        <ForgotPasswordConfirmPage
          onGoToLogin={() => handleNavigate("login")}
        />
      );
    }
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
