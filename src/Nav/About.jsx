import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import logom from '../logo.png';
import { useNavigate } from 'react-router-dom';


const About = () => {

  let history=useNavigate();

  let [gdata,sdata]=useState([{name:'username',surname:'usersurname',email:'useremail',age:'userage',_id:'userid',number:'userno',gender:'usergender'}]);
   
  let CallLog=async()=>{

   try {
    let data1=await fetch('http://localhost:8000/about',{
      method:'GET',
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:'include'
    });

  let data=await data1.json();

  if(data.length==1){
    sdata(data);
  }


   if(data1.status===400){
     history('/login');
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
  


  return (
    <Wrapper>
   
   <div className='maindiv'>
   
    <div className='imgdiv'>
       
       <img alt='error' src={logom}/>
       <div className='move'><p>Change Image</p></div>

    </div>

    <div className='info'>
     
  
   <p>Name : <span>{gdata && gdata[0].name}</span></p>
   <p>Surname : <span>{gdata && gdata[0].surname}</span></p>
   <p>ID : <span>{gdata && gdata[0]._id}</span></p>
   <p>Contact No : <span>{gdata && gdata[0].number}</span></p>
   <p>Age : <span>{gdata && gdata[0].age}</span></p>
   <p>Email : <span>{gdata && gdata[0].email}</span></p>
   <p>Gender : <span>{gdata && gdata[0].gender}</span></p> 



    </div>

    <div className='take'><p>Edit Profile</p></div>

   </div>

  


    </Wrapper>
  )
}

export default About;

const Wrapper=styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
background-color: #FFFFFF;
padding-top: 6rem;


.maindiv{
  width: 50vw;
  height: 80vh;
  background-color: black;
  position: relative;
  border-radius: 1rem;


.imgdiv{
  width: inherit;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  cursor: pointer;
  margin-bottom: 0.2rem;

  



  img{
    border: 2px solid #FFFFFF;
    height: 20rem;
    width: 20rem;
    z-index: 3;

    &:hover{
      border: 2px solid var(--oran);
    }
  }

  .move{
    position: absolute;
    width: 20rem;
    height: 3rem;
    background-color: #979797;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;


   

 
    
    p{
      color: #FFFFFF;
      font-size: 1.4rem;
    }
  }
}

.info{

  font-size: 1.8rem;
  color: var(--maincol);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 4rem;

  p{


    span{
    color: #FFFFFF;
    }

  }


}

}


.take{
  position: absolute;
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: #979797;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 3rem;
  top: 2rem;

  &:hover {
    background-color: #FFFFFF;
  }

  &:hover p{
      color:var(--oran);
  }

  p{
    color: #FFFFFF;
    font-size: 1.4rem;
  }
}


@media (min-width:300px) and (max-width:600px){

  width: 100vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: flex-start;
background-color: #FFFFFF;
padding-top: 2rem;


.maindiv{
  width: 90vw;
  height: 80vh;
  background-color: black;
  position: relative;


.imgdiv{
  width: inherit;
  display: flex;
  justify-content: flex-start;
  padding-left:4rem;
  margin-top: 2rem;
  position: relative;
  cursor: pointer;
  margin-bottom: 3rem;



  img{
    border: 2px solid #FFFFFF;
    height: 16rem;
    width: 16rem;
    z-index: 3;
  }

  .move{
    position: absolute;
    width: 16rem;
    height: 3rem;
    background-color: #979797;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
      color: #FFFFFF;
      font-size: 1rem;
    }
  }
}

.info{

  font-size: 1.6rem;
  color: var(--maincol);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 4rem;

  p{


    span{
    color: #FFFFFF;
    }

  }


}

}


.take{
  position: absolute;
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  background-color: #979797;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  right: 3rem;
  top: 2rem;

  p{
    color: #FFFFFF;
    font-size: 1.4rem;
  }
}


}


`;