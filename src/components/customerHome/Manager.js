import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import NavbarCustomer from '../navs/Navbar';
import ManagerDashboard from '../ManagerHome/ManagerDashboard';
import HmsIntegration from '../navs/NavContext';


export default function Manager(){  

    return(
        <HmsIntegration>
            <NavbarCustomer/>
              <NavLink>
                <ManagerDashboard/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </HmsIntegration>
    );
}