import { createContext } from "react";
import { apiPost } from "../../utils/apiHelpers";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const register = async (data) => {
    var res = await apiPost("Authentication/Register", data, {}, false);
    return res;
  };
  const login = async (data) => {
    var res = await apiPost("Authentication/Login", data, {}, false);
    return res;
  };

  return (
    <AuthContext.Provider value={{ register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
//newfile
