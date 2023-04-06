import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage?.getItem("wewatchLogin"))
  );

  const [authError, setAuthError] = useState("");

  const { state } = useLocation();
  const navigate = useNavigate();

  function logoutUser() {
    try {
      localStorage.removeItem("wewatchLogin");
      setCurrentUser();
    } catch (err) {
      console.error("Error while logging out", err);
      setAuthError(true);
    }
  }
  const setUserAndNavigate = (response) => {
    const user = response.data.data;
    console.log("setuser chala", user);
    localStorage?.setItem("wewatchLogin", JSON.stringify(user));
    setCurrentUser(user);
    state?.from ? navigate(state.from) : navigate("/");
  };

  async function signupUserWithCredentials(name, username, email, password) {
    try {
      const user = {
        name: name,
        username: username,
        email: email,
        password: password,
      };
      const response = await axios.post(
        `https://authentication-backend.dhairyagulati.repl.co/signup`,
        { user }
      );
      response.data.status === "success"
        ? setUserAndNavigate(response)
        : setAuthError(true);
    } catch (error) {
      console.error("Error occured during signup", error);
      setAuthError("could not sign at the moment");
    }
  }

  const loginUserWithCredentials = async (username, password) => {
    try {
      const user = { username: username, password: password };
      const response = await axios.post(
        "https://authentication-backend.dhairyagulati.repl.co/login",
        { user }
      );
      console.log("login chala", response);
      response.data.status === "success"
        ? setUserAndNavigate(response)
        : setAuthError(true);
    } catch (error) {
      console.error("Error occured during login", error);
      setAuthError("account does not exist");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loginUserWithCredentials,
        logoutUser,
        signupUserWithCredentials,
        currentUser,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
