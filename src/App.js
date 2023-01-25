import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

 import Login from "./components/authentication/Login";
 import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import ResetPassword from "./components/authentication/ResetPassword";
import ChangePassword from "./components/authentication/ChangePassword";

import './components/PayForHotel/PayForHotelForm.css';

import {PayForHotelForm} from './components/PayForHotel/PayForHotelForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} /> 
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
         {/* <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />   */}
      <Route path="pay-for-hotel" element={<PayForHotelForm />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
