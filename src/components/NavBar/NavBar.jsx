import React, { useState } from "react";
import "./Register.css";

const NavBar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or API call here
    // Example: You can add your own logic to check if the credentials are correct

    console.log("Submitted:", { username, password });

    // Reset the form
    setUsername("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="loginbtn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
