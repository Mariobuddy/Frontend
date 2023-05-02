import React from 'react'
import styled from 'styled-components';
import { GrFormAdd } from "react-icons/gr";
import { HiMinusSm } from "react-icons/hi";

const CartToggle = ({avail,DecreasePlus,IncreasePlus}) => {

  return (
    
    <Wrapper>

        <div className='count'>
        <GrFormAdd className='add' onClick={()=>{
         IncreasePlus();
         }} /><p>{avail}</p><HiMinusSm className='minus' onClick={()=>{
        DecreasePlus();
        }} />
        </div>

    </Wrapper>
  )
}

export default CartToggle;


const Wrapper=styled.div`



.count{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;

  .add{
    font-size: 2.2rem;
    margin-right: 1.5rem;
  }

  .minus{
    font-size: 2.2rem;
    margin-left: 1.5rem;


  }

  p{
    font-size: 1.2rem;
    color: var(--txt);
    width: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

@media (min-width:300px) and (max-width:600px){


  .count{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0rem;

  .add{
    font-size: 2rem;
    margin-right: 0.8rem;
  }

  .minus{
    font-size: 2rem;
    margin-left: 0.8rem;


  }

  p{
    font-size: 1.2rem;
    color: var(--txt);
    width: 1.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}


}

`;