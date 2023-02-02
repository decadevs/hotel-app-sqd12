import React, { useContext, useState } from "react";
import locked from "../../assets/Locked-Security.svg";
import { AuthContext } from "../../context/auth/authContext";
import "./ResetPassword.css";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { forgotPassword } = useContext(AuthContext);
  const sendMail = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setErrMsg("Please put your email address");
      return;
    }
    //some c# code to change the logged in user password
    setErrMsg("");
    const res = await forgotPassword(email.trim());
    setErrMsg(res);
  };
  return (
    <div className="reset_pswd_container">
      <div className="reset_pswd">
        <img src={locked} className="reset_paswdLogo" />
        <h5>Enter Email of your account</h5>
      </div>
      {errMsg !== "" && <p style={{ color: "red" }}>{errMsg}</p>}
      <div className="reset_pswd_form">
        <form>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />

          <br />
          <button type="submit" onClick={sendMail} className="reset_pswdButton">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}
