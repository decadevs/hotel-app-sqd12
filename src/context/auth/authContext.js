import { createContext } from "react";
import { apiPost } from "../../utils/apiHelpers";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const register = async (data) => {
    var res = await apiPost("Authentication/Register", data, {}, false);
    return res;
  };
  const login = async (value) => {
    const { data } = await apiPost("Authentication/Login", value, {}, false);
    //console.log(data);
    if (data.succeeded) {
      localStorage.setItem("token", data.data);
    }
    return data;
  };
  const forgotPassword = async (email) => {
    let dataObj = { email };
    const { data } = await apiPost(
      "Authentication/Reset-Password",
      dataObj,
      {},
      false
    );
    return data;
  };
  //
  const resetPassword = async (value) => {
    const { data } = await apiPost(
      "Authentication/Reset-Update-Password",
      value,
      {},
      false
    );
    return data;
  };
  const changePassword = async (value) => {
    const { data } = await apiPost("Authentication/Change-Password", value, {});
    return data;
  };
  return (
    <AuthContext.Provider
      value={{ register, login, forgotPassword, resetPassword, changePassword }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
//newfile
