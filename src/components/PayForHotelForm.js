import React from 'react';
import bgImg from '../assets/images.jfif'


export  function PayForHotelForm(){
    return(
        
        <header>
            <div className='title'>
            <h2 className='title-name'>Hotel Payment Form</h2>
            </div>
              
            <div className="container">
            <div className='left'>
            <h3>Billing Address</h3>
            <form id='form' className='flex flex-col'>
                First Name
            <input type='text' name='' placeholder='First Name' required/>
            Last Name
            <input type='text' name='' placeholder='Last Name' required/>
            Email
            <input type='text' name='' placeholder='E-mail' required />
            Address Line 1
            <input type='text' name='' placeholder='Address Line 1' required />
            Address Line 2
            <input type='text' name='' placeholder='Address Line 2'/>
            City
            <input type="text" name='' placeholder='City'/>
            <div id='zip'>
                <label>
                    State
                    <select>
                        <option>Choose State...</option>
                        <option>Lagos</option>
                        <option>Rivers</option>
                        <option>Abuja</option>
                        <option>Anambra</option>
                        <option>Calabar</option>
                    </select>
                    </label>
                    <label>
                        Zip Code
                        <input type='number' name='' placeholder='Zip Code' />
                    </label>
                
            </div>
            </form>
            </div>
            <div class="right">
                <h3>Payment</h3>
                <br/>
                <form id='form' className='flex flex-col'>
                Accepted Card Payment Methods <br/>
                <img src={bgImg} alt=''/>
                <br/>
                
                 Card Number
                <input type='text' name='' placeholder='Card Number' required/>
                Expiry Month
                <input type='text' name='' placeholder='Expiry Month' required />
                <div id='zip'>
                <label>
                    Expiry Year
                    <select>
                        <option>Choose Year...</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                    </select>
             </label>
            <div>
            <label>CV</label>
            </div>     
            <input type='number' name='' placeholder='Enter Your CVV' />
                
                        
                   
            </div>
            </form>
            
                <form id='promo'>
                Promo Code
                        <input type='number' name='' placeholder='Promo Code' />
                </form>
                
                
            <input type='submit' name="" value="Pay For Hotel"/>
            </div>
            </div>
            

            
            
        
        </header>
        
    )
}