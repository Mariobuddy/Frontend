import React,{useEffect} from 'react'
import { UseCart } from '../Context/CartContext'
import styled from 'styled-components';
import CartRender from '../MainBody/CartRender';
import { Button } from '../Header/Header';
import CartEmpty from '../MainBody/CartEmpty';
import { NavLink } from 'react-router-dom';
import Currency from '../MainBody/Currency';

const Cart = () => {

  const {Cart,DeleteAll,TotalPrice}=UseCart();


  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);



  return (
   

    <>
    
    {
      Cart.length===0
      ?<CartEmpty/>
      : <Wrapper>

      <div className='maincon'>
  
       <div className='one'>
        <p>ITEM</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
        <p>DELETE</p> 
       </div>
       <hr style={{color:'#979797'}}></hr>
  
       <div className='two'>
           
           {
            Cart.map((val)=>{
              return <CartRender key={val.id} {...val} />
            })
           }
  
  
       </div>
  
       <hr style={{color:'#979797'}}></hr>
  
       <div className='buttons'>
        <NavLink to={'/products'}><Button className='but1'>CONTINUE SHOPPING</Button></NavLink>
        <Button className='but2' onClick={(e)=>DeleteAll(e)}>CLEAR CART</Button>
        </div>


        <div className='details'>
             <div className='innerdiv'>
             <p>Subtotal : <span><Currency price={TotalPrice} /> </span></p>
             <p>Shipping Fee : <span><Currency price={50} /></span></p>
             <hr className='take'></hr>
             <p>Order Total : <span><Currency price={TotalPrice+50} /></span></p>
             </div>
           
        </div>
  
      </div>
  
    
      </Wrapper>
    }
    
    
    </>

  )
}

export default Cart;


const Wrapper=styled.div`
height: fit-content;
width: 100vw;
display: flex;
justify-content: center;
padding-top: 4rem;
margin-bottom: 11.2rem;

.maincon{
  width: 80vw;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .one{
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: var(--maincol);

    p{
      font-size: 1.6rem;
    }
  
  }


  .buttons{

    width: inherit;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    .but1{
      background-color: var(--maincol);
    
      &:hover{
  box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem  var(--maincol),
            0 0 0.4rem  var(--maincol),
            0 0 1.8rem  var(--maincol),
            inset 0 0 1rem var(--maincol); 
}


    }


    .but2{

    }


  }




  .two{
    width: inherit;
    height: inherit;
     

  }

  .details{
    width:25rem;
    height: 20rem;
    background-color: #aeaeae43;
    align-self: flex-end;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    .innerdiv{
      width: 20rem;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      

      p{
      font-size: 1.4rem;
      color: #696969;

    }

    }

    
  }



}



@media (min-width:300px) and (max-width:600px){

height: fit-content;
width: 100vw;
display: flex;
justify-content: center;
padding-top: 4rem;
margin-bottom: 11.2rem;
overflow: hidden;

.maincon{
  width: 80vw;
  height: fit-content;
  display: flex;
  flex-direction: column;

  .one{
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: var(--maincol);



    p{
      font-size: 1.2rem;

      &:nth-child(2){
        display: none;
      }
    }
  
  }


  .buttons{

    width: inherit;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    .but1{
      background-color: var(--maincol);
    
      &:hover{
      box-shadow: 0 0 .1rem #fff,
            0 0 .1rem #fff,
            0 0 1rem  var(--maincol),
            0 0 0.4rem  var(--maincol),
            0 0 1.8rem  var(--maincol),
            inset 0 0 1rem var(--maincol); 
}


    }


    .but2{

    }


  }




  .two{
    width: inherit;
    height: inherit;
     

  }

  .details{
    width:20rem;
    height: 15rem;
    background-color: #aeaeae43;
    align-self: flex-end;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    .innerdiv{
      width: 20rem;
      height: 15rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

    
      .take{
        width: 15rem;
        margin-left: 2rem;
      }
      
      

      p{
      font-size: 1.2rem;
      color: #696969;
      margin-left: 2rem;

    }

    }

    
  }



}


}


`;