import React from "react";
import "./Register.css";
import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/authContext";

const initialData = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(initialData);
  const [errMsg, setErrMsg] = useState("");
  const { login } = useContext(AuthContext);
  const handleLogin = async () => {
    const { username, password } = data;
    if (username.trim() === "" || password.trim() === "") {
      setErrMsg("Please put your username and password");
      return;
    }
    setErrMsg("");
    const res = await login(data);
  };
  return (
    <div className="login">
      <div class="form">
        <div class="title">Login</div>

        <div class="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, username: e.target.value }))
            }
            id="username"
            class="input"
            type="text"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="username" class="placeholder">
            Username
          </label>
        </div>
        <div class="input-container ic2">
          <input
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            id="password"
            class="input"
            type="password"
            placeholder=" "
          />
          <div class="cut"></div>
          <label for="password" class="placeholder">
            Password
          </label>
        </div>
        {errMsg !== "" ? (
          <p style={{ color: "red", fontSize: "10px" }}>*** {errMsg} ***</p>
        ) : (
          <p></p>
        )}
        <button onClick={handleLogin} type="text" class="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link> or{" "}
          <Link to="/reset-password">Forget Password</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
