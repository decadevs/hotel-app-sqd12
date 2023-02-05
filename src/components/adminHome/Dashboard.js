import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import AdminDashboard from '../../pages/admin/Dashboard'
import HmsIntegration from '../navs/DashboardContext';

export default function Dashboard() {
    return(
        <HmsIntegration>
            <Navbar/>
            <NavLink>
                <AdminDashboard/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </HmsIntegration>
        
    )
}
