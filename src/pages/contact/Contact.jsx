import React from 'react';
import "./contact.css";
import { Navbar } from '../../components/Navbar';

export const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className='main'>
      <div className='hedding'>
      <div className='contact'>
        <h1>Contact us</h1>
      </div>
    
      <div className='form'>
        <div className='name'>
          <label htmlFor="fname">My name is</label><br></br>
          <input type="text" id="fname" name="fname" placeholder='Your name'/><br></br>
        </div>
        <div className='number'> 
          <label htmlFor="number">My phone number is</label><br></br>
          <input type="tel" id="number" name="number"  placeholder='Your phone number'/><br></br>
        </div>
        <div className='work'>
          <label htmlFor="work">I work at</label><br></br>
          <input type="text" id="work" name="work" placeholder='Your company'/><br></br>
          </div>
        <div className='mail'>
          <label htmlFor="email">Reach me at</label><br></br>
          <input type="email" id="email" name="email" placeholder='Your@gmail.com'/><br></br>
        </div>
        <div className='message'>
          <label htmlFor="Message">Message</label><br></br>
          <input type="text" id="Message" name="Message" placeholder='Start typing here..'/><br></br>
        </div>
          <button >Submit</button>
          </div>
     
      </div>
      

      <div className='sidebar'>
          <div className='email'>
              <h3>Prepare for a quick response</h3>
              <p>interact@fantasy.co</p>

              <div className='New'>
                New York
              </div>

              <div className='get'>
              Get directions  |  +1 212-941-5220
             
              </div>

              <div className='privacy'>
              Privacy Policy
              </div>
              
          </div>
        </div>
      </div>
    </>
  );
};
