import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import NavbarCustomer from '../navs/Navbar';
import Hotelview from '../../pages/customer/Hotelview';
import HmsIntegration from '../navs/NavContext';


export default function Hotel(){  
    
    return(
        <HmsIntegration>
             <NavbarCustomer/>
              <NavLink>
                <Hotelview/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </HmsIntegration>
    );
}