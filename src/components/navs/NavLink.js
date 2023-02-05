import React from 'react';
import Section from './navContext';



export default function NavLink(props){

    return(
      <Section>
             <div id="main">
                {props.children}
            </div>
      </Section>       
    );
}