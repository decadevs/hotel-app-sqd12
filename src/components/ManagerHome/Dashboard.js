import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import DashboardHome from './DashboardHome';
import Section, { Manager } from '../navs/navContext';
import { useEffect, useState } from 'react';

export default function Dashboard() {
       const [payload, usePayload] = useState({})
       
       
    return(
        <>
        <Section>
            <Navbar/>
            <NavLink>
               <DashboardHome/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </Section>
            
        </>
           
         
    )
}