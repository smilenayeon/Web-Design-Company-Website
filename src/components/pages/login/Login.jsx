import React, { useState, useContext } from "react";
import MiniLogo from "../../../assets/images/super-hello-mini-logo.jpg";
import AuthContext from "../../authentication/AuthContext";

function Login({ showLogin, setShowLogin, isLoggedIn, setIsLoggedIn }) {
  const [clientCode, setClicentCode] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = e => {
    e.preventDefault();
    if (clientCode === "client001" && password === "1234") {
      login({ user: clientCode });
      setShowLogin(false);
    } else {
      alert("Please check your client code and password again.");
    }
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div id="login" className="login">
      <i
        onClick={closeLogin}
        className=" close-button fa-solid fa-circle-xmark"
      />
      <img
        className="login-page-logo"
        src={MiniLogo}
        alt="super hello company mini logo"
      />
      <div className="login-container">
        <h1>Sign in</h1>
        <p>
          Please{" "}
          <span className="login-contact">
            <a
              className="contact"
              href="mailto:someone@example.com?subject=The%20Subject&body=Hello%2C%20let's%20talk!"
            >
              Contact
            </a>
          </span>{" "}
          us to sign up.
        </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="client-code">Client Code</label>
          <input
            type="text"
            id="client-code"
            value={clientCode}
            onChange={e => setClicentCode(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input type="submit" value="Sign in" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
