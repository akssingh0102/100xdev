import { useNavigate } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className={styles.pageButton}
        >
          Dashboard
        </button>
        <button
          type="button"
          onClick={() => navigate("/")}
          className={styles.pageButton}
        >
          Landing
        </button>
      </div>
    </>
  );
};

export default AppBar;
