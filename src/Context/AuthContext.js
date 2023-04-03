import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage?.getItem("nftubeLogin"))
  );
  const [authError, setAuthError] = useState(false);

  const { state } = useLocation();
  const navigate = useNavigate();

  function logoutUser() {
    try {
      localStorage.removeItem("nftubeLogin");
      setCurrentUser();
    } catch (err) {
      console.error("Error while logging out", err);
      setAuthError(true);
    }
  }
  const setUserAndNavigate = (response) => {
    const user = response.data.data;
    localStorage?.setItem("nftubeLogin", JSON.stringify(user));
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
      const response = await signup(user);
      response.data.success ? setUserAndNavigate(response) : setAuthError(true);
    } catch (error) {
      console.error("Error occured during signup", error);
      setAuthError(true);
    }
  }

  const loginUserWithCredentials = async (username, password) => {
    try {
      const user = { username: username, password: password };
      const response = await login(user);
      response.data.success ? setUserAndNavigate(response) : setAuthError(true);
    } catch (error) {
      console.error("Error occured during login", error);
      setAuthError(true);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        loginUserWithCredentials,
        logoutUser,
        signupUserWithCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
