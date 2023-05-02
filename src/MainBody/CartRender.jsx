import React from 'react'
import styled from 'styled-components';
import Currency from './Currency';
import { MdDelete } from "react-icons/md";
import { UseCart } from '../Context/CartContext';
import CartToggle from './CartToggle';

const CartRender = (val) => {

    const {id,name,image,avail,color,price}=val;

    const {Delete,IncreasePlus,DecreasePlus}=UseCart();









  return (


    <Wrapper>

        <div className='one1'>

          
          <div className='img'>
        
          <img alt='Error' src={image}/>

          </div>


          <div className='info'>
               
             <p>{name}</p>
               
              <div className='gola'>
                <p>Color : </p>
                <div className='col' style={{backgroundColor:color}}>
             </div>
               </div>



          </div>

 
        </div>
        <div className='two2'><Currency price={price} /></div>
        <div className='three'>
          
            <CartToggle avail={avail} IncreasePlus={()=>IncreasePlus(id)} DecreasePlus={()=>DecreasePlus(id)}  />




        </div>
        <div className='four'><Currency price={avail===0?price:price*avail}/></div>
        <div className='five'><MdDelete style={{color:'red',fontSize:'2rem'}} onClick={()=>Delete(id)} /></div>
         

    </Wrapper>



  )

  }


  const Wrapper=styled.div`
  
  width: inherit;
  height: 7rem;
  display: flex;
  margin-top: 1rem;



  .one1{
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 25rem;


    .img{

     
      img{
       
        width: 7rem;
        height: 4rem;

      }


    }


    .info{
      margin-left: 0.5rem;
      
     p{
      font-size: 1.2rem;
      margin-bottom: 0.7rem;
      overflow: hidden;
      white-space: nowrap;

     }

     .gola{
      display: flex;
      align-items: center;


      .col{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        margin-top: -0.6rem;
      }

    p{
      margin-right: 0.5rem;
    }

     }


    }


  }

  .two2{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    width: 6rem;
    margin-left: 2.5rem;
  }

  .three{
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin-left: 21rem;

  }

  .four{
    font-size: 1.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 5rem;
    margin-left:24rem;

  }

  .five{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 26rem;
  }

  
  @media (min-width:300px) and (max-width:600px){
  

  width: inherit;
  height: 7rem;
  display: flex;
  margin-top: 1rem;



  .one1{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: flex-start;
    width: 25rem;
    max-width: 25rem;

    .img{
     width: 7rem;
     height: 4rem;
     
      img{
       
        width: 5rem;
        height: 3rem;

      }


    }


    .info{
      margin-left: 0rem;
      
     p{
      font-size: 0.8rem;
      margin-bottom: 0rem;
      overflow: hidden;
      width: 5rem;

     }

     .gola{
      display: flex;
      align-items: center;

      .col{
        width: 1rem;
        height: 1rem;
        margin-top: 0rem;
        margin-left: -2rem;
      }

    p{
      margin-right: 0.5rem;
    }



     }


    }


  }

  .two2{
    display: none;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.4rem;
    width: 6rem;
    margin-left: 2.5rem;
  }

  .three{
    font-size: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    margin-left: 0rem;

  }

  .four{
    font-size: 1.2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 5rem;
    margin-left:5.5rem;

  }

  .five{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    right: 19rem;
    position: relative;
  }



  }
  
  
  `;



export default CartRender;