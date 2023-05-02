import React from 'react'
import { Button } from '../Header/Header';
import styled from 'styled-components';


function Contact(){
    return (
        <Wrap>
        
         <div className='headof'>
        <h1>Feel Free To Contact Us</h1>
         </div>

        <div className='ifone'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.269906749114!2d72.82611225121593!3d19.443926486813474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a90b498b2c5b%3A0xe1aa47850228c757!2sMahakali%20Temple!5e0!3m2!1sen!2sin!4v1670830333087!5m2!1sen!2sin" width='100%' height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
         
      
         <div className='formmain'>

          <div className='formchild'>
          <form action='https://formspree.io/f/mbjbnbzy' method='POST' className='formtake'>

            <input type='text'  className='sameinp' placeholder='USERNAME' name='Username' required autoComplete='off'></input>
            <input type='email'  className='sameinp' placeholder='Email' name='email' required autoComplete='off'></input>
            <textarea  className='sameinp' placeholder='How Can We Help You' rows='5' cols='5' required autoComplete='off'  name='message'></textarea>
            <Button className='but'>SEND</Button>

          </form>
          </div>

         </div>

        </Wrap>
    );
    
    }
    
    
    export default Contact;

    const Wrap=styled.div`

    width: 100vw;
    height: fit-content;
    margin-bottom: 4rem;

    .headof{
        width: inherit;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0rem;
    }
  
    .ifone{
        width: inherit;
        height: inherit;
    }

    .formmain{
       width: inherit;
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;


        .formchild{
        width: 30vw;
        height: 35vh;
        display: flex;
        flex-direction: column;
       
        .formtake{
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
  
           .sameinp{
            width: 350px;
            padding: 1rem;
            margin-top: 2rem;
            outline: none;
           }

            .but{
                width: 12rem;
                align-self: flex-start ;
                margin-left: 5.4rem;
                margin-top: 2rem;
            }
        }
        
    }



    }


    @media (min-width:300px) and (max-width:600px){
   
         
    width: 100vw;
    height: fit-content;
    margin-bottom: 4rem;

    .headof{
        width: inherit;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0rem;
    }
  
    .ifone{
        width: inherit;
        height: inherit;
    }

    .formmain{
       width: inherit;
        margin-top: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;


        .formchild{
        width: 30vw;
        height: 35vh;
        display: flex;
        flex-direction: column;
       
        .formtake{
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
  
           .sameinp{
            width: 350px;
            padding: 1rem;
            margin-top: 2rem;
            outline: none;
           }

            .but{
                width: 12rem;
                align-self: flex-start ;
                margin-left: -11.4rem;
                margin-top: 2rem;
            }
        }
        
    }



    }



    }

  
    
    
    `;



