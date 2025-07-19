import React, { useState } from "react";
import SavedPasswords from "./SavedPasswords";
import "./PasswordManager.css";
const PasswordManager = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let gen = "";
    for (let i = 0; i < 12; i++) {
      gen += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(gen);
  };

  const savePassword = () => {
    if (!account || !password) return;

    if (isEditing !== null) {
      const updated = [...saved];
      updated[isEditing] = { account, password };
      setSaved(updated);
      setIsEditing(null);
    } else {
      setSaved([...saved, { account, password }]);
    }

    setAccount("");
    setPassword("");
  };

  const clearAll = () => {
    setSaved([]);
    setIsEditing(null);
    setAccount("");
    setPassword("");
  };

  const handleEdit = (index) => {
    setAccount(saved[index].account);
    setPassword(saved[index].password);
    setIsEditing(index);
  };

  const handleDelete = (index) => {
    const updated = saved.filter((_, i) => i !== index);
    setSaved(updated);
  };

  return (
    <div className="pm-container">
      <h1>Password Manager</h1>

      <input
        type="text"
        placeholder="Enter account name"
        value={account}
        onChange={(e) => setAccount(e.target.value)}
      />

      <div className="gen-row">
        <input
          type="text"
          placeholder="Enter or generate password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={generatePassword}>Generate</button>
      </div>

      <button className="save-btn" onClick={savePassword}>
        {isEditing !== null ? "Update Password" : "Save Password"}
      </button>

      <button className="clear-btn" onClick={clearAll}>Clear All</button>

      <SavedPasswords data={saved} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default PasswordManager;
