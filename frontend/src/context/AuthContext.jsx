import Cookies from "js-cookie";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const updateAuth = (data) => {
    Cookies.set("access_token", data.access_token);
    setUser(data.user);
  };

  const logout = () => {
    setUser(null);
    Cookies.remove("access_token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        logout,
        updateAuth,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
