import React,{useEffect} from 'react'
import styled from 'styled-components';
import { UseCustom } from '../Context/MainContext';
import FeaturedRender from './FeaturedRender';

const OurFeaturedProducts = () => {
  const {FeaturedProduct}=UseCustom();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>


        <div className='maindiv'>

        
        <div className='infoone'>
             
             <p>CHECK NOW!</p>
             <h1>Our Feature Services</h1>
            
             </div>
         <div className='productsone'>
          
          
         {
            FeaturedProduct.map((val)=>{
                 return <FeaturedRender key={val.id} {...val}/>
            })
          }


         </div>


        </div>

    </Wrapper>
  )
}

export default OurFeaturedProducts;


const Wrapper=styled.div`
width: 100vw;
height: 60vh;
background-color: #f0efef;

.maindiv{
    display: flex;
    width: inherit;
    height: inherit;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    .infoone{
        margin-left: 30rem;
        margin-top: -3rem;
        align-self: flex-start;

     p{
     color: #9b42d3;
     font-size: 1.2rem;

    }

    h1{
    font-size: 2.5rem;
    font-weight: 900;
    }
    }

    .productsone{
      width: 60vw;
      height: 27rem;
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      flex-wrap:wrap;

    }

}

@media (min-width:300px) and (max-width:600px){

margin-top:15rem;
width: 100vw;
height: fit-content;
background-color: #f0efef;

.maindiv{
    display: flex;
    width: inherit;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .infoone{
        margin-left: 5rem;
        align-self: flex-start;
        margin-top:5rem;
      
        
     p{
     color: #9b42d3;
     font-size: 1.5rem;

    }

    h1{
    font-size: 3rem;
    font-weight: 900;
    }
    }

    .productsone{
      width: fit-content;
      height: fit-content;
      margin-top: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      flex-direction:column;


    }

}




}


`;