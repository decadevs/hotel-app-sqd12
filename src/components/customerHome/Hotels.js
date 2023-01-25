import React from 'react';
import NavLink from '../navs/NavLink';
import Sidebar from '../navs/Sidebar';
import Navbar from '../navs/Navbar';


export default function Hotel(){  
    
    return(
        <>
            <Navbar/>
              <NavLink>
                <div> Hotels</div>
            </NavLink>
            <Sidebar roleValue={"Customer"}/>
        </>
    );
}