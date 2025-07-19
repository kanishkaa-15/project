import React, { useState } from "react";
import "./AuthForm.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form className="auth-form">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="auth-input"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              required
            />
          )}
          <button type="submit" className="auth-button">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="auth-toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
