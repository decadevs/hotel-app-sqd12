import { createContext } from "react";
import { start } from "repl";
import { apiPost } from "../../utils/apiHelpers";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const register = async (data) => {
    var res = await apiPost("Authentication/Register", data, {}, false);
    return res;
  };
  const login = async (value) => {
    const { data } = await apiPost("Authentication/Login", value, {}, false);
    console.log(data);
    if (data.succeeded) {
      localStorage.setItem("token", data.data);
    }
    return data;
  };

  return (
    <AuthContext.Provider value={{ register, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
//newfile
