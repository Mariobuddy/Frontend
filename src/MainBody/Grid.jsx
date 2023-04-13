import React from 'react'
import styled from 'styled-components';
import RenderPro from './RenderPro';
import { UseProducts } from '../Context/ProductsContext';

const Grid = () => {

  const {AllProducts}=UseProducts();


  return (
    
     <Wrapper>

      {
     
        AllProducts && AllProducts.map((data)=>{
     
        return <RenderPro key={data.id} {...data} />

     })

      }

     </Wrapper>
    
  )
}

export default Grid;


const Wrapper=styled.div`
width: inherit;
height: inherit;
display: flex;
flex-wrap: wrap;
position: relative;
margin-top: 3rem;


@media (min-width:300px) and (max-width:600px){


width: inherit;
height: inherit;
display: flex;
flex-wrap: wrap;
position: relative;
margin-top: 8rem;
justify-content: center;
align-items: center;


}


`;


