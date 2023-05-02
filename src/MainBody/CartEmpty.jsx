import React from 'react'
import styled from 'styled-components';

const CartEmpty = () => {
  return (

    <Wrapper>

        <p style={{fontSize:'2rem'}}>YOUR CART IS EMPTY</p>


    </Wrapper>

  )
}

export default CartEmpty;


const Wrapper=styled.div`

width: 100vw;
height: 43vh;
display: flex;
justify-content: center;
align-items: center;


@media (min-width:300px) and (max-width:600px){

height: 55vh;


}


`;