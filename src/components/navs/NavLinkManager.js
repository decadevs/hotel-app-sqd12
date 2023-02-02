import React from 'react';
import  { Manager } from './navContext';



export default function NavLink(props){

    return(                         
            <Manager>
                <div id="main">
                    {props.children}
                </div>
            </Manager>          
    );
}