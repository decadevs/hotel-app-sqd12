import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from '../src/components/ResetUpdatePassword/ResetUpdatePassword'
//import './App.css';
import Sidebar from './components/navs/Sidebar';

 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetUpdatePassword />} />
      </Routes>
    </BrowserRouter>
  );
 }

export default App;
