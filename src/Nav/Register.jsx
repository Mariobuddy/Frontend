import React,{useState} from 'react';
import styled,{keyframes} from 'styled-components';
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


const Register = () => {

    let history=useNavigate();

let [ginp,sinp]=useState({
    name:'',surname:'',age:'',gender:'',password:'',cpassword:'',email:'',number:'',
});

const GetInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    sinp({...ginp,[name]:value});

}

const PostBut= async(e)=>{
 e.preventDefault();
 document.getElementById('buts').classList.add('addbut');
 document.getElementById('buts').classList.remove('addbut');
  

 let res=await fetch('https://backend-qxc0.onrender.com/register',{
      method:'POST',
      headers:{
     "Content-type": "application/json",
    },
    credentials:'include',
     body:JSON.stringify(ginp)
 })

 let data=await res.json();

 if(data.con===500){
    window.alert('Please fill all field');
 }else if(data.con===300){
   window.alert('Email is already used');
 }else if(data.con===250){
    window.alert('Password is not matching');
 }else if(data.con===200){
    window.alert('Registration sucess');
    history('/login');
 }
}

  return (

    <Wrapper>

   <div className='maindiv'>
      <BiUserCircle className='user'/>

    <form method='post'>
     
    <div className="formcon">
      <input type="text" className="same" id="fname" onChange={GetInput} name="name" placeholder="First Name *"></input> 
    </div>

    <div className="formcon">
                        
  <input type="text"id="lname" className="same" name="surname" onChange={GetInput} placeholder="Last Name *"></input>

     </div>

     <div className="lab">
     <input type="radio" name="gender" value="Male" onChange={GetInput}></input>
     <label  className="cir">Male</label>
     <input type="radio" name="gender" value="Female" onChange={GetInput}></input>
     <label className="cir">Female</label>
                   </div>


     <div className="formcon">
         <input type="text" id="email"  className="same" name="email"  onChange={GetInput} placeholder="Your Email *"></input>
         </div>



                   <div className="formcon">
                        <input type="text" className="same" id="phone" name="number" placeholder="Your Phone *" onChange={GetInput} ></input>

                    </div>
                    <div className="formcon">
                        <input type="text" className="same" name="age" id="age" placeholder="Your Age *" onChange={GetInput}></input>

                    </div>
                    <div className="formcon">
                        <input type="password" className="same" id="pass" name="password" placeholder="Password *" onChange={GetInput}></input>

                    </div>
                    <div className="formcon">
                        <input type="password" className="same" id="cpass" name="cpassword" placeholder="Confirm Password *" onChange={GetInput}></input>

                    </div>

                 


                <div className='bdiv'>
                 <button className="sub" id="buts" type="submit" onClick={PostBut}>Submit</button>

                </div>

    </form>
     

   </div>

    </Wrapper>

  )
}

export default Register;

const butsni=keyframes`

0%{
    width: 14rem;
    height: 3rem;

}

100%{
    width: 15rem;
    height: 4rem; 
}

`

const Wrapper=styled.div`
width: 100vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;


.addbut{
    animation: ${butsni} 0.1s linear;
}

.maindiv{
    margin-top: 4rem;
    width: 35vw;
    height: 80vh;
    background: linear-gradient(to right,#42275a ,#734b6d);
    z-index: 66666;

.user{
    font-size: 8rem;
    color: #FFFFFF;
    text-align: center;
    width: inherit;
}

form{
    display: flex;
    flex-wrap: wrap;
    height: inherit;
    width: inherit;
    justify-content: space-around;


    .lab{
        width: 22rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        height: 3.5rem;

        label{
            color: #FFFFFF;
            font-size: 1.4rem;
            margin-right: 1rem;
        }

        input{
            margin-right: 1rem;
            margin-bottom: 0.3rem;
        }
    }
   
    
   .bdiv{
    width: 18rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;

    #buts{
        width: 15rem;
        background-color: var(--oran);
        color: #FFFFFF;
        outline: none;
        border: none;
        height: 4rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: all 0.1s ease;


    }
   }


    .formcon{
    height: fit-content;
    width: fit-content;


    input{
     
        width: 22rem;
        height: 3.5rem;
        outline: none;
        border: none;
        border-bottom: 2px solid #FFFFFF;
        background-color: transparent;
        color: #FFFFFF;

    }

}
}

}

`;