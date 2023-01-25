import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import CustomerDashboard from "./components/customerHome/Dashboard";
import ManagerDashboard from "./components/managerHome/Dashboard";
import AdminDashboard from "./components/adminHome/Dashboard";
import CustomerHotel from "./components/customerHome/Hotels";
import CustomerManager from "./components/customerHome/Manager";
import CustomerTransaction from "./components/customerHome/Transactions";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="customer-dashboard" element={<CustomerDashboard />} />
        <Route path="manager-dashboard" element={<ManagerDashboard />} />
        <Route path="admin-dashboard" element={<AdminDashboard />} />
        <Route path="customer-hotel" element={<CustomerHotel/>} />
        <Route path="customer-manager" element={<CustomerManager/>} />
        <Route path="customer-transaction" element={<CustomerTransaction/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
