import React, {useState} from 'react';
import Bell from '../../../src/assets/Bell.svg';
import Dropdown from '../../../src/assets/Drop-down.svg';
import Profile from '../../../src/assets/Profile.jpg';
import { Link } from 'react-router-dom';
import '../../style/ProfileDropDown.css';
import Section from './navContext';
import { useContext } from 'react';
import { DashboardContext } from './navContext';
import  Header  from './Header';

export default function Navbar(){
   
    return(
        <Section>
           <Header/>
        </Section>
    );
}

