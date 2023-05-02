import React,{useState} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logom from '../logo.png';
import { UseCart } from '../Context/CartContext';
import { BiUserCircle } from "react-icons/bi";


const Header = () => {


  const [gham,sham]=useState(false);

  const {CartCir}=UseCart();
  return (
    <Wrapper>

        <div className='imgone'>
          <img alt='Error' src={logom}/>
        </div>
        <div className={gham? 'nav active1':'nav'}>
            <ul className='ultake'>
              <div className='gol'>{CartCir}</div>
          <li><NavLink className={'navone'} to={'/'}>Home</NavLink></li>
          <li><NavLink className={'navone'} to={'/products'}>Products</NavLink></li>
          <li><NavLink className={'navone'} to={'/contact'}>Contact</NavLink></li>
          <li><NavLink className={'navone'} to={'/about'}><BiUserCircle className='user'/></NavLink></li>
          <li><NavLink className={'navone'} to={'/logout'}><Button>Logout</Button></NavLink></li>
          <li><NavLink className={'navone'} to={'/cart'}><FaShoppingCart className='carts'/></NavLink></li>

            </ul>
           
           <div className='m-res'>
           
           <GiHamburgerMenu className='open-ham' onClick={()=>{
            sham(true);
           }}/>
           <MdClose className='open-ham close-ham' style={{color:'white'}} onClick={()=>{
            sham(false);
           }}/>

           </div>

        </div>

    </Wrapper>
  )
}

export default Header;


export const Button=styled.button`
background-color: #ff3700;
color: #FFFFFF;
font-weight: 500;
padding: 0.5rem 1.1rem;
border-radius: 0.3rem;
border: none;
outline: none;
cursor: pointer;



&:hover{
  box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem  #ff3700,
            0 0 0.4rem  #ff3700,
            0 0 1.8rem  #ff3700,
            inset 0 0 1rem  #ff3700; 
}


`;


const Wrapper=styled.div`

width:100vw;
height: 7vh;
background-color:#2f2626;
display: flex;
justify-content:space-between;
position: sticky;
top: 0;
z-index: 9999999999;



.active{
  color: #ff3700 !important;
}

.imgone{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  max-width: 20vw;
  height: inherit;
  img{
    width: 7rem;
    height: 6rem;
    margin-top: 0.5rem;
  }
}


.nav{
  display: flex;
   justify-content: center;
   align-items: center;
  width: 60vw;
  padding: 0 3rem;

  .m-res{
    cursor: pointer;
    display: none;
  }

  .close-ham{
    display: none;
  }

  .ultake{
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: inherit;



   .gol{
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff3700;
    border-radius: 50%;
    color: #ffffff;
    position: absolute;
    text-align: center;
    right: 2.5rem;
    top: 1rem;
   }

    li{
      list-style-type: none;


      .user{
        font-size: 3rem;
        margin-top: 0.8rem;
      }

   .navone{
     text-decoration: none;
     color: #FFFFFF;
     font-size: 1.6rem;

     .carts{
     font-size: 1.8rem;

     }

     &:hover{
      color: #ff3700;
     }
   }

    }


  }


}



@media (min-width:300px) and (max-width:600px){

width:100vw;
height: 7vh;
background-color:#2f2626;
display: flex;
justify-content:space-between;


.active{
  color: #ff3700 !important;
}

.imgone{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10vw;
  max-width: 20vw;
  margin-left: 2rem;
  height: inherit;
  img{
    width: 8rem;
    height: 3.5rem;
  }
}


.nav{
  display: flex;
   justify-content: center;
   align-items: center;
   width: 60vw;
   padding: 0 3rem;

  .m-res{
    display: inline-block;
    z-index: 99999;
    background-color: transparent;


    .open-ham{
      font-size: 3rem;
      position: absolute;
      right: 1rem;
      top: 1.6rem;
      color: #ffffff !important;

          
    }


  }

  .ultake{
   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
   position: absolute;
   width: 100vw;
   height: 100vh;
   background-color: #51087E;
   top: 0;
   left: 0;
   z-index: 999;
   padding-left: 35%;
   padding-bottom: 10rem;
   visibility: hidden;


   .gol{
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff3700;
    border-radius: 50%;
    color: #ffffff;
    position: absolute;
    text-align: center;
    right: 22.5rem;
    top: 55.3rem;
   }

    li{
      list-style-type: none;
      margin-top: 4rem;


      .user{
        font-size: 3rem;
        margin-top: 0rem;
      }

   .navone{
     text-decoration: none;
     color: #FFFFFF;
     font-size: 2.5rem;


     .carts{
     font-size: 2.4rem;

     }

     &:hover{
      color: #ff3700;
     }
   }

    }
  }

  


}


.active1 .open-ham{
      display: none;
      color: #FFFFFF !important;
    }

  .active1 .close-ham{
      display: inline-block;
      color: #FFFFFF !important;

    }

  .active1 .ultake{
    visibility: visible;
  }

}



`;