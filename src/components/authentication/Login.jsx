import React from "react";
import "./Register.css";
import "./Login.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/authContext";
import { timedAlert } from "../../utils/alerts";

const initialData = {
  username: "",
  password: "",
};

function Login() {
  const [data, setData] = useState(initialData);
  const { login } = useContext(AuthContext);
  const handleLogin = async () => {
    const { username, password } = data;
    if (username.trim() === "" || password.trim() === "") {
      timedAlert(
        "top-end",
        "error",
        "Please fill the username and password field"
      );
      return;
    }
    const res = await login(data);
    console.log(res);
    if (res.succeeded) timedAlert("top-end", "success", res.message);
    else timedAlert("top-end", "error", res.message);
  };
  return (
    <div className="register">
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
        <button onClick={handleLogin} type="text" class="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link> or{" "}
          <Link to="/change-password">Forget Password</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
