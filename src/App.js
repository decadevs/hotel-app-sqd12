import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
//import './App.css';
import Sidebar from "./components/navs/Sidebar";
import UserTransactions from "./components/customerHome/usertransaction/UserTransactions";
import ResetPassword from "./components/authentication/ResetPassword";
import ChangePassword from "./components/authentication/ChangePassword";
import LandingPage from './components/landingPage/landingPageIndex/LandingPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="user-transaction" element={< UserTransactions/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
