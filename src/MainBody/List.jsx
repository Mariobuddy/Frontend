import React from 'react'
import styled from 'styled-components';
import { UseProducts } from '../Context/ProductsContext';
import SingleImage from './SingleImage';

const List = () => {

  const {AllProducts}=UseProducts();

  return (
    <Wrapper>

      
    {
    
    AllProducts && AllProducts.map((val)=>{
      return <SingleImage key={val.id} {...val}/>
    })

    }


        
    </Wrapper>
  )
}

export default List;

const Wrapper=styled.div`

width: inherit;
height: fit-content;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;

@media (min-width:300px) and (max-width:600px){

width:100vw;
height: fit-content;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
position: relative;
top: 5rem;
margin-bottom: 6rem;
}

`;