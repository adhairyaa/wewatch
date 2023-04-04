import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../Context/AuthContext";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginUserWithCredentials } = useAuth();
  return (
    <div>
      <div className="login-Form">
        <h2>Welcome to WeWatch</h2>
        <input placeholder="username"></input>
        <input placeholder="password"></input>
        <div className="login-guest">Login as guest</div>
        <button
          className="login-button"
          onClick={() => loginUserWithCredentials(username, password)}
        >
          Login
        </button>

        <div>
          Not a member{" "}
          <Link to="/signup">
            <button className="signup-Button">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
