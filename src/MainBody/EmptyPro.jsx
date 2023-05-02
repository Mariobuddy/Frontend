import React from 'react'
import styled from 'styled-components';

const EmptyPro = () => {
  return (
    <Wrapper>

     <h1>NO PRODUCTS TO DISPLAY</h1>

    </Wrapper>
  )
}

export default EmptyPro;

const Wrapper=styled.div`
width: 60vw;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;



@media (min-width:300px) and (max-width:600px){


    h1{
        white-space: nowrap;
    }


}



`;