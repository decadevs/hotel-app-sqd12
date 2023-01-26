import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '../../assets/dashboard-solid-24 1.svg'
import ManagerIcon from '../../assets/dashboard-manager 24 3.svg'
import Solid from '../../assets/Hotels-Hotels-24 2.svg'
import TransactionIcon from '../../assets/dashboard-Transactions24 5.svg'
import logoutIcon from '../../assets/dashboard-logout- 24 4.svg'
import "./ProfileLayout.css"
import penVector from '../../assets/penVector.svg'
import imageEllipse from '../../assets/imageEllipse 5.svg'


export const ProfileLayout = () => {
  return (
    <div className='pl_container'>
        <div className='pl_sideBar' >
            <div className='pl_iconGroup'>
              <Link to="/dashboard">
                 <div className='pl_iconContainer'>
                    <img src={DashboardIcon} className="pl_Icons"/>
                    <span>Dashboard</span>
                </div>
              </Link>

              <Link to="">
                 <div className='pl_iconContainer'>
                    <img src={Solid} className="pl_Icons"/>
                    <span>Hotels</span>
                </div>
              </Link>

              <Link to="">
                 <div className='pl_iconContainer'>
                    <img src={ManagerIcon} className="pl_Icons"/>
                    <span>Profile</span>
                </div>
              </Link>

              <Link to="">
                 <div className='pl_iconContainer'>
                    <img src={TransactionIcon} className="pl_Icons"/>
                    <span>Transaction</span>
                </div>
              </Link>

                
            </div>

            <div className='pl_iconContainer'>
                 <img src={logoutIcon} className="pl_Icons"/>
                <span>Logout</span>
            </div>
           
        
        </div>

        <div className='pl_formContainer'>
            
            <form className='pl_form'>
                <div className='pl_h1'>

                    <img src={imageEllipse} className="pl_Icons profileImage"/>

                    <div className="pl_titleContainer"> 
                            <h1>Manager</h1>
                            <h2>Profile Name</h2>
                    </div>

                </div>

                <div className='pl_formNestedDiv'>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Full Name' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Date of Birth' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Phone Number' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Email Address' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Hotel Name' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Hotel Primary Address' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                    <div className='pl_formInputContainer'><input type="text" placeholder='Hotel Contact Phone' className='pl_formInput'/><img src={penVector} className="pl_penImg"/></div>
                </div>
            </form>
        </div>        
    
    </div>
  )
}