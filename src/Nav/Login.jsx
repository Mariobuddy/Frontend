import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTran } from '../App';

const Login = () => {

  const [ginp,sinp]=useState({email:'',password:''});

  let history=useNavigate();

  const {dispatch}=useTran();


  const Run=()=>{
   
    document.getElementById('take1').style.borderBottom='2px solid var(--oran)';
    document.getElementById('pone').style.top='-1.5rem';
    document.getElementById('pone').style.color='var(--oran)';

  }

  const Blur=()=>{
    if(document.getElementById('take1').value.length===0){
    document.getElementById('take1').style.borderBottom='2px solid gray';
    document.getElementById('pone').style.top='0.5rem';
    document.getElementById('pone').style.color='gray';
    }

   
  }
  

  const Run1=()=>{
    document.getElementById('take2').style.borderBottom='2px solid var(--oran)';
    document.getElementById('ptwo').style.top='-1.5rem';
    document.getElementById('ptwo').style.color='var(--oran)';
  }


  const Blur1=()=>{
    if(document.getElementById('take2').value.length===0){
      document.getElementById('take2').style.borderBottom='2px solid gray';
      document.getElementById('ptwo').style.top='0.5rem';
      document.getElementById('ptwo').style.color='gray';
    }
   
  }

  const GetInp=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    sinp({...ginp,[name]:value});

  }


  const InpSubmit=async(e)=>{
   e.preventDefault();
    
   let data1=await fetch('http://localhost:8000/login',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    credentials:'include',
    body:JSON.stringify(ginp)
   });

   let data2=await data1.json();


   if(data2.con===400){
    window.alert('Field are empty');
   }else if(data2.con===300){
    window.alert('Password is not matching');
   }else if(data2.con===233){
    window.alert('Enter your email');
   }else if(data2.con===234){
   window.alert('Enter your passsword');
   }else if(data2.con===250){
    window.alert('Invalid email');
   }
   else if(data2.con===200){
    dispatch({type:'User',payload:true});
    history('/');
   }
  }


  return (
    <Wrapper>

       <div className='maindiv'>

        <h1>Sign in</h1>

        <div className='inner'>

          <form method='post' action=''>

        <div className='one'>
        <input type='text' id='take1' name='email' onChange={GetInp} autoComplete='nope' onFocus={Run} onBlur={Blur}></input>
        <p id='pone'>Your email</p>
       </div>
       <div className='two'>
       <input type='password' id='take2' onChange={GetInp}  autoComplete='nope' name='password' onFocus={Run1} onBlur={Blur1}></input>
       <p id='ptwo'>Your password</p>
       <p style={{cursor:'pointer'}}>Forgot password?</p>
       </div>
       <div className='three'>
        <button className='buts' type="submit" onClick={InpSubmit}>SIGN IN</button>
       </div>

        </form>

       
        </div>

        <p className='please'>Don't have an account?  <NavLink className={'please1'} to={'/registering'}>Sign up</NavLink></p>

       </div>

    </Wrapper>
  )
}

export default Login;

const Wrapper=styled.div`



width: 100vw;
height: fit-content;
display: flex;
justify-content: center;
align-items: center;

.maindiv{

  height: 60vh;
  width: 25vw;
  margin-top: 5rem;
  background-color: #FFFFFF;
  box-shadow: 2px 2px 20px 5px gray;


   .please{
    font-size: 1.2rem;
    position: relative;
    bottom: 0;
    top: 11rem;
    left: 4rem;
    color: var(--oran);

    .please1{
      color: var(--maincol);
      text-decoration: none;
    }
   }


  h1{
    font-size: 2.5rem;
    margin-top: 1rem;
    color: var(--maincol);
    width: inherit;
    text-align: center;
    text-shadow: 1px 1px 1px black;
  }

  .inner{
    width: inherit;
    margin-top: 5rem;

    .one{
     width: inherit;
     display: flex;
     justify-content: center;
     align-items: center;
     position: relative;

     #pone{
      font-size: 1.4rem;
      position: absolute;
      color: gray;
      left: 4.2rem;
      top: 0.5rem;
      transition: all 0.2s ease;


     }
      
      input{
        outline: none;
        width: 30rem;
        height: 3.5rem;
        margin-bottom: 2rem;
        border: none;
        border-bottom: 2px solid gray;
        z-index: 4444;
        background-color: transparent;

      }
    }


    .three{
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      margin-top: 4rem;



      .buts{
        width: 30rem;
        height: 3.5rem;
        outline: none;
        color: #FFFFFF;
        border-radius: 2rem;
        cursor: pointer;
        border: none;
        background: linear-gradient(to right,#f5714d,#ff3700);


        &:hover{

        }

      }

    }


    .two{
      width: inherit;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     position: relative;

     #ptwo{
      font-size: 1.4rem;
      position: absolute;
      color: gray;
      transition: all 0.2s ease;
      left: 4.5rem;
      top: 0.5rem;
     }

      input{
        outline: none;
        width: 30rem;
        height: 3.5rem;
        margin-bottom: 2rem;
        border: none;
        background-color: transparent;
        border-bottom: 2px solid gray;
        transition: all 1s ease;
        z-index: 4444;


    

      }

      p{
        color: var(--oran);
        align-self: flex-end;
        font-size: 1.2rem;
        margin-right: 4rem;
      }

    }

  }

}



`;