import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../../Context/AuthContext";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {
    loginUserWithCredentials,
    currentUser,
    logoutUser,
    authError,
    authLoading,
  } = useAuth();

  const guestLogin = () => {
    setPassword("gulati");
    setUsername("dhairya");
  };
  return (
    <div>
      {currentUser ? (
        <div className="logoutUser">
          <p> Hi {currentUser.username} 👋 </p>
          <p> comeback soon ! </p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <div className="login-Form">
          <h2>Welcome to WeWatch </h2>
          <input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            placeholder="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="login-guest" onClick={() => guestLogin()}>
            Login as guest
          </div>
          <button
            className="login-button"
            onClick={() => loginUserWithCredentials(username, password)}
          >
            Login
          </button>
          <p>
            {authError} {authLoading && <p>laoding...</p>}{" "}
          </p>
          <div>
            Not a member{" "}
            <Link to="/signup">
              <button className="signup-Button">SignUp</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
