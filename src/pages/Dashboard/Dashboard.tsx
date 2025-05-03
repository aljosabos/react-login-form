import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Welcome to the dashboard page</h2>
        <button className={styles.button} onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className={styles.content}></div>
    </div>
  );
};
