import { BrowserRouter, Routes, Route } from "react-router-dom";
//import "./App.css";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetUpdatePassword from "../src/components/ResetUpdatePassword/ResetUpdatePassword";
import AddRoom from "../src/pages/manager/AddRoom";
import Sidebar from "./components/navs/Sidebar";
import CreateAmenity from "./components/amenity/CreateAmenity";
import Amenities from "./components/amenity/Amenities";
import UserTransactions from "./components/customerHome/usertransaction/UserTransactions";
import ResetPassword from "./components/authentication/ResetPassword";
import ChangePassword from "./components/authentication/ChangePassword";
import "./components/PayForHotel/PayForHotelForm.css";
import { PayForHotelForm } from "./components/PayForHotel/PayForHotelForm";
import LandingPage from "./components/landingPage/landingPageIndex/LandingPage";
import Transactions from "./components/transaction/Transactions";
import Create from "./components/modals/CreatedModal";
import Delete from "./components/modals/DeleteModal";
import Update from "./components/modals/UpdatedModal";
import Error from "./components/modals/ErrorModal";
import Success from "./components/modals/SuccessModal";
import Booking from "./pages/customer/Booking";
import ViewMore from "./components/viewMore/viewMore";
import HotelListing from "./components/HotelListing/HotelListing";
import ManagerDashboard from "./components/ManagerHome/ManagerDashboard";
import {Dashboard} from "./components/ManagerHome/ManagerDashboard";
import HotelReview from "./components/HotelReview/HotelReview";
import ManagerTransactions from "./components/ManagerHome/managertransactions/ManagerTransactions";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-update-password" element={<ResetUpdatePassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="user-transaction" element={<UserTransactions />} />
        <Route path="customer-transactions" element={<Transactions />} />
        <Route path="pay-for-hotel" element={<PayForHotelForm />} />
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
        <Route path="hotel-listing" element={<HotelListing />} />
        <Route path="managerdashboard" element={<ManagerDashboard />} />
        <Route path="manager-dashboard" element={<Dashboard />} />
        <Route path="manager-transactions" element={<ManagerTransactions />} />
        <Route path="amenities" element={<Amenities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
