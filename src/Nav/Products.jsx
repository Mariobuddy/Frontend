import React,{useEffect,useState} from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { UseProducts } from '../Context/ProductsContext';
import Grid from '../MainBody/Grid';
import List from '../MainBody/List';
import HamBurger from '../MainBody/HamBurger';


const Products = () => {


const {AllProducts,GridOne,Listone,Grids}=UseProducts();






  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

   

  return (

    <Wrapper>


  <div className='left'>

   <HamBurger/>

    </div>


      <div className='right'>
        
        <div className='navone'>

         <div className='one1'>

         <div className={Grids ? 'one activa':'one' } onClick={GridOne}><TfiLayoutGrid2Alt  className='icon'/></div>
         
        <div className={!Grids ? 'one activa':'one' } onClick={Listone}><GiHamburgerMenu className='icon'/></div>

         </div>


  
         <div className='two2'>
         <p style={{fontSize:'1.2rem'}}>{AllProducts && AllProducts.length} total products</p>
         </div>
        

        <div className='three3'>
        
        <select>
          <option>Price(Lowest)</option>
          <option>Price(Highest)</option>
          <option>Price(a-z)</option>
          <option>Price(z-a)</option>
        </select>

        </div>
           
        </div>
        

        <div className='loadpro'>
         
          {
            Grids===true?
            <Grid/>:<List/>
          }

        </div>


      </div>


    </Wrapper>
  )

}

export default Products;


const Wrapper=styled.div`

width:100vw;
height: fit-content;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 3rem 0rem;

.activa{
  background-color: black !important;
  color: #FFFFFF;
}


.hidden{
display: none;
}


.visible{
display: block;
}


.ham .clicked{

  &:nth-child(1){
    transition: 0.5s ease;
    transform: rotate(45deg) translate(0.75em,1.25em);

  }

  &:nth-child(2){
    transition: 0.5s ease;
    transform: scale(0.1);
  }


  &:nth-child(3){
    transition: 0.5s ease;
    transform: rotate(135deg) translate(-0.5em,1em);
  }


}



.left{
  
width: fit-content;
height: fit-content;
z-index: 555555;
margin-right: 2rem;

}


.right{
width: 60vw;
height: fit-content;



.navone{
  display: flex;
  justify-content: space-between;
  align-items: center;

  .one1{
     

    display: flex;
    justify-content: center;
    align-items: center;
    
    
    .one{
    width: 4rem;
    height: 3.2rem;
    background-color: #AEAEAE;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;



      .icon{
       font-size: 1.8rem;
      }

    }


  }

  .three3{

   
    select{
      background-color: transparent;
      outline:none;
      border: 1px solid var(--txt);
      width: 12rem;
      height: 3.1rem;
      padding-left: 1rem;
      font-size: 1.2rem;
    }

  }

}

.loadpro{
  width: 60vw;
  height: fit-content;
}

}


@media (min-width:300px) and (max-width:600px){


width:100vw;
height: fit-content;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 0rem 0rem;



.activa{
  background-color: black !important;
  color: #FFFFFF;
}


.hidden{
display: none;
}


.visible{
display: block;
}




.clicked{

&:nth-child(1){
  transition: 0.5s ease;
  transform: rotate(45deg) translate(0.75em,1.25em);
  /* transform-origin: 50% 100%; */


}

&:nth-child(2){
  transition: 0.5s ease;
  transform: scale(0.1);
}


&:nth-child(3){
  transition: 0.5s ease;
  transform: rotate(135deg) translate(-0.5em,1em);
  /* transform-origin: 20% 40%; */

}


}




.actives{
  display: block !important;
}



.left{
position: fixed;
width: 62vw;
height: 100vh;

}


.right{
width: fit-content;
height: fit-content;


.navone{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;


  .one1{
     

    display: flex;
    justify-content: center;
    align-items: center;
    
    
    .one{
    width: 4rem;
    height: 3.2rem;
    background-color: #AEAEAE;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;



      .icon{
       font-size: 1.8rem;


      }

    }


  }

  .two2{

     
    margin-left: 2rem;

    p{
      white-space: nowrap;
    }

  }

  .three3{

    margin-left: 3.7rem;
   
    select{
      background-color: transparent;
      outline:none;
      border: 1px solid var(--txt);
      width: 12rem;
      height: 3.1rem;
      padding-left: 1rem;
      font-size: 1.2rem;
    }

  }


}

.loadpro{
  width: 100vw;
  height: fit-content;
}

}






}

`;