import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import Transactions from '../customerHome/Transactions/Transactions';

export default function Transaction() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <Transactions/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </>
        
    )
}