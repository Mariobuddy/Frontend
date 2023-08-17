import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useTran } from '../App';

const Logout = () => {

  let history=useNavigate();

  const {dispatch}=useTran();

let Log=async()=>{

try {
  let data1=await fetch('http://localhost:8000/loginout',{
    method:"GET",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    credentials:'include'
  })

  let maindata=await data1.json();



  if(maindata.con===200){
    dispatch({type:'NotUser',payload:false});
    history('/login');
  }
} catch (error) {
  console.log(error);
}

  }


  useEffect(()=>{
   Log();
  },[]);




  return (
    <div>Logout</div>
  )
}

export default Logout