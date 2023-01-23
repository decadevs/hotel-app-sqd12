import React from 'react';
<<<<<<< HEAD
import Bell from '../../../src/assets/Bell.svg';
import Dropdown from '../../../src/assets/Drop-down.svg';
import Profile from '../../../src/assets/Profile.jpg';
=======
>>>>>>> 32deefebc036365a9ddc4fb07decefd617685fbc

export default function Navbar(){
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    return(
        <>
            <header>
                <nav>
                    <div className="menu">
                        {/*Use any element to open the sidenav*/}
<<<<<<< HEAD
                        <span style={{"padding":"5px","cursor":"pointer","background":"#2067A1","border-radius":"5px"}} onClick={openNav}>&#9776;</span>
                    </div>
                    <div>
                        <input type="text"/>
                    </div>
                    <div className="right-nav">
                        <div className="bell">
                            <img src={Bell} alt="Your SVG" />
                        </div>
                        <div className="name">
                            Ekenedilichukwu Mathew Obiasogu
                            <img src={Dropdown} alt="Your SVG" style={{"padding-left":"10px"}}/>
                        </div>
                        <div className="profile">
                            <img src={Profile} alt="Your SVG" style={{"width":"50px","border-radius":"50%"}}/>
                        </div>
                    </div>              
=======
                        <span style={{"font-size":"30px","cursor":"pointer"}} onClick={openNav}>&#9776; open</span>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                    <div className="right-nav">
                        <div className="bell">
                            bell
                        </div>
                        <div className="name">
                            name
                        </div>
                        <div className="profile">
                            profile
                        </div>
                    </div>
                    
               
>>>>>>> 32deefebc036365a9ddc4fb07decefd617685fbc
                </nav>
            </header>
        </>
    );
}