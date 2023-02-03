import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import NavbarCustomer from '../navs/Navbar';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import HmsIntegration from '../navs/NavContext';

export default function Dashboard() {
            
    return(
        <HmsIntegration>
             <NavbarCustomer/>            
                <NavLink>
                    <CustomerDashboard/>
                </NavLink>          
             <Sidebar roleValue={"Customer"}/>
        </HmsIntegration>
        
    )
}
