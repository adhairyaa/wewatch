import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="login-Form">
        <h2>Welcome to WeWatch</h2>
        <input></input>
        <input></input>
        <button>Login</button>
        <div>
          Dont have a account <button>SignUp</button>{" "}
        </div>
      </div>
    </div>
  );
}
