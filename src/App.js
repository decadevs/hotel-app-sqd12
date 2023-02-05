import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerDashboard from "./components/customerHome/Dashboard";
import Dashboard from "./components/ManagerHome/Dashboard";
// import { Dashboard } from "./components/ManagerHome/ManagerDashboard";
import AdminDashboard from "./components/adminHome/Dashboard";
import CustomerHotel from "./components/customerHome/Hotels";
import CustomerManager from "./components/customerHome/Manager";
import CustomerTransaction from "./components/customerHome/Transactions";
import ManagerHotel from "./components/ManagerHome/Hotels";
import ManagerBookings from "./components/ManagerHome/Bookings";
import ManagerTransactions from "./components/ManagerHome/Transactions";
import AdminHotel from "./components/adminHome/Hotels";
import AdminBookings from "./components/adminHome/Bookings";
import AdminTransaction from "./components/adminHome/Transactions";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import AddRoom from "../src/pages/manager/AddRoom";
import Navbar from "./components/navs/Navbar";
import Sidebar from "./components/navs/Sidebar";
import CreateAmenity from "./components/amenity/CreateAmenity";
import Amenities from "./components/amenity/Amenities";
import UserTransactions from "./components/customerHome/usertransaction/UserTransactions";
import ForgetPassword from "./components/authentication/ForgetPassword";
import ResetPassword from "./components/authentication/ResetPassword";
import ChangePassword from "./components/authentication/ChangePassword";
import './components/PayForHotel/PayForHotelForm.css';
import {PayForHotelForm} from './components/PayForHotel/PayForHotelForm';
import LandingPage from"./components/landingPage/landingPageIndex/LandingPage";
import Transactions from "./components/customerHome/Transactions/Transactions";
import Create from "./components/modals/CreatedModal";
import Delete from "./components/modals/DeleteModal";
import Update from "./components/modals/UpdatedModal";
import Error from "./components/modals/ErrorModal";
import Success from "./components/modals/SuccessModal";
import Booking from "./pages/customer/Booking";
import ViewMore from "./components/viewMore/viewMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="booking" element={<Booking />} />
        <Route path="user-transaction" element={<UserTransactions />} />
        <Route path="customer-transactions" element={<Transactions />} />
        <Route path="pay-for-hotel" element={<PayForHotelForm />} />
        <Route path="addroom" element={<AddRoom />} />
        <Route path="create-modal" element={<Create />} />
        <Route path="delete-modal" element={<Delete />} />
        <Route path="update-modal" element={<Update />} />
        <Route path="error-modal" element={<Error />} />
        <Route path="success-modal" element={<Success />} />
        <Route path="view-more" element={<ViewMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
