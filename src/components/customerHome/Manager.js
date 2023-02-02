import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import Navbar from '../navs/Navbar';
import ManagerDashboard from '../ManagerHome/ManagerDashboard';


export default function Manager(){  
    
    return(
        <>
            <Navbar/>
              <NavLink>
                <ManagerDashboard/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}