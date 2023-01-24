import React from "react";
import { MdHome, MdOutlineBedroomParent, MdOutlineRoomService, MdPeople } from "react-icons/md";
import './input.css'
const Input = () => 
{
  return (
   <div>
     <div className="input-container" >
      <input type="text" placeholder="Hotel Name" className="" />
      <div className="icon-box">
        <MdHome className="icon" />
      </div>
    </div>
    <div className="input-container">
      <input type="text" placeholder="Room Type" className="" />
      <div className="icon-box">
        <MdOutlineBedroomParent className="icon" />
      </div>
    </div>
    <div className="input-container">
      <input type="text" placeholder="No of People" className="" />
      <div className="icon-box">
        <MdPeople className="icon" />
      </div>
    </div>
    <div className="input-container">
      <input type="text" placeholder="Service" className="" />
      <div className="icon-box">
        <MdOutlineRoomService className="icon" />
      </div>
    </div>
   </div>
  );
};

export default Input;
