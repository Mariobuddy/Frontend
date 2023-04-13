import React,{useState} from 'react'
import styled from 'styled-components';
import MenuNav from './MenuNav';

const HamBurger = () => {

    const [open,sopen]=useState(true);
    console.log(open);

  return (
   <>
     <Wrapper open={open} onClick={()=>sopen(!open)}>
    <div className='four4'>
     <div className={'ham'} ></div>
     <div className={'ham'}></div>
     <div className={'ham'}></div>
     </div>
    </Wrapper>
    <MenuNav open={open}/>
   
   </>
  )
}

export default HamBurger;

const Wrapper=styled.div`
width: inherit;
height: inherit;
position: absolute;

.four4{
    position: absolute;
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: none;

   .ham{

    background-color: ${({open})=>open ? 'white':'black'};

    
    &:nth-child(1){
        width: 3rem;
        height: 0.4rem;
        position: absolute;
        bottom: 1rem;
    }


    &:nth-child(2){
      width: 3rem;
      height: 0.4rem;
      position: absolute;
    }


    &:nth-child(3){
      width: 3rem;
        height: 0.4rem;
        position: absolute;
        top: 1rem;

    }
   }


  }




@media (min-width:300px) and (max-width:600px){

    .four4{
    position: fixed;
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: block;
    left: 90vw;
    right: 0;
    z-index: 555555555;
    top: 10.8rem;
    cursor: pointer;

    .ham{
        background-color: ${({open})=>!open ? 'white':'black'};
    
    &:nth-child(1){
        width: 3rem;
        height: 0.4rem;
        position: absolute;
        bottom: 1.5rem;
        transform: ${({open})=>!open ?'rotate(45deg)' :'rotate(0)'};
        transform-origin: 90% 30%;
        transition:all 0.5s linear;

    }


    &:nth-child(2){
      width: 3rem;
      height: 0.4rem;
      position: absolute;
      transform: ${({open})=>!open ?'translateX(100%)' :'translateX(0)'};
      opacity: ${({open})=>!open ? 0:1};
      transition:all 0.5s linear;


    }


    &:nth-child(3){
      width: 3rem;
        height: 0.4rem;
        position: absolute;
        top: 1rem;
        transform: ${({open})=>!open ?'rotate(-45deg)' :'rotate(0)'};
        transform-origin: 60% 0%;
        transition:all 0.5s linear;





    }
   }

  }


}

`;