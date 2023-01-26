import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import Navbar from '../navs/Navbar';
import Transactions from './Transactions/Transactions';


export default function Manager(){  
    
    return(
        <>
            <Navbar/>
              <NavLink>
                <Transactions/>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}