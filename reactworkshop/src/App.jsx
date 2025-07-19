import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import PasswordManager from "./components/PasswordManager";

function App() {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <div style={styles.navbar}>
        <button onClick={() => setShowAuth(!showAuth)} style={styles.navButton}>
          {showAuth ? "🔙 Back to App" : "🔐 Login / Signup"}
        </button>
      </div>
      {showAuth ? <AuthForm /> : <PasswordManager />}
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: "#ffffffff",
    padding: "10px 20px",
    textAlign: "right",
  },
  navButton: {
    padding: "8px 16px",
    backgroundColor: "#27707bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default App;