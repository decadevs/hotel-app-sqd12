import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import Navbar from '../navs/Navbar';


export default function Manager(){  
    
    return(
        <>
            <Navbar/>
              <NavLink>
                <div> Transactions</div>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}