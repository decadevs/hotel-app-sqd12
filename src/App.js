import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
//import './App.css';
import Sidebar from "./components/navs/Sidebar";

function App()
{
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="hotel-review" element={<HotelReview />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
