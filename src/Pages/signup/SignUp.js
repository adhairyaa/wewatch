import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../signup/SignUp.css";
import { useAuth } from "../../Context/AuthContext";
function SignUp() {
  const { signupUserWithCredentials } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <div className="login-Form">
        <h2>Welcome to WeWatch</h2>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button
          className="login-button"
          onClick={() =>
            signupUserWithCredentials(name, username, email, password)
          }
        >
          SignUp
        </button>

        <div>
          Already a member{" "}
          <Link to="/login">
            <button className="signup-Button">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
