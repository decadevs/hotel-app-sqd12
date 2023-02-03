import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import DashboardHome from './DashboardHome';
import HmsIntegration from '../navs/DashboardContext';

export default function Dashboard() {
       
    return(
        <>
        <HmsIntegration>
            <Navbar/>
            <NavLink>
               <DashboardHome/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </HmsIntegration>            
        </>         
    )
}
