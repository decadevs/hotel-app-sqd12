import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
// import UserTransactions from '../customerHome/usertransaction/UserTransactions';
import HmsIntegration from '../navs/DashboardContext';
import AdminTransaction from '../transaction/AdminTransaction';

export default function Transaction() {
    return(
        <HmsIntegration>
            <Navbar/>
            <NavLink>
                <AdminTransaction/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </HmsIntegration>
        
    )
}