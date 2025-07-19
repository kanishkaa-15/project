import React, { useState } from "react";

const SavedPasswords = ({ data, onEdit, onDelete }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <div>
      <h2>Saved Passwords</h2>
      {data.length === 0 ? (
        <p>No passwords saved yet.</p>
      ) : (
        <table className="password-table">
          <thead>
            <tr>
              <th>Account</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                onClick={() =>
                  setSelectedRow(selectedRow === index ? null : index)
                }
                className={selectedRow === index ? "selected" : ""}
              >
                <td>{item.account}</td>
                <td>
                  {item.password}
                  {selectedRow === index && (
                    <span className="action-buttons">
                      <button className="edit-btn" onClick={() => onEdit(index)}>
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => onDelete(index)}
                      >
                        Delete
                      </button>
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedPasswords;
