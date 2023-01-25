import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

 import Login from "./components/authentication/Login";
 import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import ResetPassword from "./ResetPassword";
//import './App.css';
import AddRoom from "../src/pages/manager/AddRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} /> 
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="addroom" element={<AddRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
