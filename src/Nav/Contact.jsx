import React,{useEffect,useState} from 'react'
import { Button } from '../Header/Header';
import styled from 'styled-components';


function Contact(){

    let [gdata,sdata]=useState([{name:'USERNAME',email:'USEREMAIL',message:''}]);


    let Chan=(e)=>{
        let name=e.target.name;
        let value=e.target.value;

        sdata({...gdata,[name]:value});
    }
   
  let CallLog=async()=>{

   try {
    let data1=await fetch('http://localhost:8000/info',{
      method:'GET',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:'include'
    });

  let data=await data1.json();

  if(data.length==1){
    sdata({...data,name:data[0].name,email:data[0].email});
  }


   if(data1.status===400){
     throw new Error('Error');
    }
    
   } catch (error) {
    console.log('Error');
   }
   

  }

  useEffect(()=>{
    window.scrollTo(0,0);
    CallLog();
  },[]);


  let Sendit=async(e)=>{
  e.preventDefault();
  
  try {

    let data1=await fetch('http://localhost:8000/contact',{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        credentials:'include',
        body:JSON.stringify(gdata)
       });

       let maindata=await data1.json();


       if(maindata.con===200){
        window.alert('Message sent sucessfully');
        sdata({...gdata,message:''});


       }else if(maindata.con===400){
         console.log('error');
       }
    
  } catch (error) {
    
    console.log(error);
    
  }

  }
  


    return (
        <Wrap>
        
         <div className='headof'>
        <h1>Feel Free To Contact Us</h1>
         </div>

        <div className='ifone'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.269906749114!2d72.82611225121593!3d19.443926486813474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a90b498b2c5b%3A0xe1aa47850228c757!2sMahakali%20Temple!5e0!3m2!1sen!2sin!4v1670830333087!5m2!1sen!2sin" width='100%' height="400" style={{border:0}} allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
         
      
         <div className='formmain'>

          <div className='formchild'>
          <form  method='POST' className='formtake'>

            <input type='text' onChange={Chan} value={gdata && gdata.name || ''} className='sameinp' placeholder='USERNAME' name='name' required autoComplete='off'></input>
            <input type='email' onChange={Chan} value={gdata && gdata.email || ''} className='sameinp' placeholder='Email' name='email' required autoComplete='off'></input>
            <textarea onChange={Chan} value={gdata && gdata.message || ''} name='message' className='sameinp' placeholder='How Can We Help You' rows='5' cols='5' required autoComplete='off'></textarea>
            <Button className='but' style={{cursor:'pointer',zIndex:'6666'}} type='submit' onClick={Sendit}>SEND</Button>

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
            color: gray;
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



