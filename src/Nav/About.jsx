import React,{useEffect} from 'react';
import styled from 'styled-components';
import logom from '../logo.png';


const About = () => {


  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  return (
    <Wrapper>
   
   <div className='maindiv'>
   
    <div className='imgdiv'>
       
       <img alt='error' src={logom}/>
       <div className='move'><p>Change Image</p></div>

    </div>

    <div className='info'>
     
  
   <p>Name : <span>Rohit</span></p>
   <p>Surname : <span>Bhatt</span></p>
   <p>ID : <span>6418912a3d8b6ed5583e0db9</span></p>
   <p>Contact No : <span>7057651379</span></p>
   <p>Age : <span>22</span></p>
   <p>Email : <span>rohitbuatt9755@gmail.com</span></p>
   <p>Gender : <span>Male</span></p>



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