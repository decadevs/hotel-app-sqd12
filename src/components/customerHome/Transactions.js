import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import Navbar from '../navs/Navbar';
// import UserTransactions from './usertransaction/UserTransactions';
import HmsIntegration from '../navs/DashboardContext';
import Transactions from '../transaction/Transactions';

export default function Manager(){  
    
    return(
        <HmsIntegration>
            <Navbar/>
              <NavLink>
                <Transactions/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </HmsIntegration>
    );
}