import React from 'react';
import Section, { Manager } from './navContext';



export default function NavLink(props){

    return(                         
            <Section>
                <div id="main">
                    {props.children}
                </div>
            </Section>          
    );
}