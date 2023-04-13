import React from 'react'
import styled,{keyframes} from 'styled-components';
import { Button } from '../Header/Header';
import Currency from './Currency';
import { NavLink } from 'react-router-dom';

const SingleImage = (val) => {
    const {image,name,price,description,id}=val;

    let make=description.split(' ');
    let cut=make.splice(0,8);
    let lcut=cut.join(' ');

  return (
    <Wrapper>
      
      <div className='innerdiv'>

        
      <Image src={image} alt='Error' />
      
      <Black/>

      </div>

      <div className='info'>
        <p>{name}</p>
        <p>{<Currency price={price}/>}</p>
        <p>{lcut+'.....'}</p>
        <NavLink to={`single/${id}`} className={'but'}><Button>Read More</Button></NavLink>

      </div>

    </Wrapper>
  )
}

export default SingleImage;


const Big=keyframes`

0%{
width:23rem;
height:17rem;
}

100%{
  width:inherit;
  height: inherit;
}

`;



const SBig=keyframes`

0%{
width:16rem;
height:15rem;
}

100%{
  width:20rem;
  height: 14em;
}

`;





const Image=styled.img`
height: 17rem;
width: 23rem;
position: absolute;


@media (min-width:300px)  and (max-width:600px){
height: 15rem;
width: 16rem;
position: relative;
bottom: 2.5rem;


}


`;


const slide=keyframes`

0%{
width: 0rem;
}

100%{
width: 28rem;
}

`;





const Sslide=keyframes`

0%{
width: 0rem;
}

100%{
width: 20rem;
}

`;





const Black=styled.div`
width: 0rem;
height: 25rem;
background-color: #0000003e;
position: absolute;
z-index: 444;
display: flex;
flex-direction: column;
left: 43rem;
margin-top: 0rem;
&:hover{
  animation: ${slide} 0.2s linear forwards;
}

&:hover ${Image}{
  animation: ${Big} 0.2s linear forwards;
}


@media (min-width:300px) and (max-width:600px){

width: 0rem;
height: 14rem;
background-color: #0000003e;
position: absolute;
z-index: 4444;
display: flex;
flex-direction: column;
left: 1.8rem;
margin-top: -5rem;
}





`


const Wrapper=styled.div`
width: 60vw;
height: fit-content;
margin-top: 3rem;
display: flex;
border: 1px solid var(--txt);


&:hover ${Black} {
  animation: ${slide} 0.2s linear forwards;
}


&:hover ${Image} {
  animation: ${Big} 0.2s linear forwards;
}

.innerdiv{
width: 28rem;
height: 25rem;
padding: 3rem;
display: flex;
justify-content: center;
align-items: center;

}


.info{
  margin-left: 14rem;
  width: 52%;

  p{
    width: inherit;


    &:nth-child(1){
    margin-top: 3rem;

      font-size: 1.6rem;
      margin-bottom: 2rem;
      white-space: nowrap;
      
    }

    &:nth-child(2){
      font-size: 1.2rem;
      color: var(--maincol);
      margin-bottom: 0.5rem;

    }

    &:nth-child(3){
     font-size: 1.2rem;
     color: var(--txt);
     margin-bottom: 4.2rem;


    }

  }

}




@media (min-width:300px) and (max-width:600px){

 
width: inherit;
height: fit-content;
margin-top: 3rem;
display: flex;
border: 1px solid var(--txt);
overflow: hidden;


&:hover ${Black} {
  animation: ${Sslide} 0.2s linear forwards;
}


&:hover ${Image} {
  animation: ${SBig} 0.2s linear forwards;
}

.innerdiv{
width: 25rem;
height: 25rem;
padding: 0rem;
display: flex;
justify-content: center;
align-items: center;
}


.info{
  margin-left: 0rem;
  width: 16rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-top: 0rem;
  height: inherit;
  justify-content: space-between;
  position: relative;
    

  .but{
   
    position: absolute;
    right: 23rem;
    white-space: nowrap;
    top: 20rem;
  }
    

  p{
    width: fit-content;
    white-space: normal;



    &:nth-child(1){
    margin-top: 2rem;

      font-size: 1.6rem;
      margin-bottom: 2rem;
    white-space: normal;


      
    }

    &:nth-child(2){
      font-size: 1.2rem;
      color: var(--maincol);
      margin-bottom: 0.5rem;
      width: fit-content;

    }

    &:nth-child(3){
     font-size: 1.2rem;
     color: var(--txt);
     margin-bottom: 0rem;
     white-space: normal !important;


    }



  }




}






}



`;