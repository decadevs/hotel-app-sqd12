import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import UserTransactions from '../customerHome/usertransaction/UserTransactions';
import HmsIntegration from '../navs/DashboardContext';
import ManagerTransactions from './managertransactions/ManagerTransactions';

export default function Transaction() {
    return(
        <HmsIntegration>
            <Navbar/>
            <NavLink>
                <ManagerTransactions/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </HmsIntegration>        
    )
}