import React from 'react'
import styled,{keyframes} from 'styled-components';
import Currency from './Currency';
import { NavLink } from 'react-router-dom';

const RenderPro = (data) => {

  const {category,name,image,price,id:idchan}=data;

    
  return (

    <NavLink to={`/single/${idchan}`}  style={{textDecoration:'none',color:'#9b55c6'}}>
     
     
     <Wrapper>

       
     <div className='com'>
         <Image alt='Error' src={image}/>
         <div className='cat'><p>{category}</p></div>
       </div>
       
       <div className='detail'>
        <p className='names'>{name}</p>
        <p><Currency price={price}/></p>
        <Black/>
       </div>
  
        
      </Wrapper>



    </NavLink>

  )
}

export default RenderPro;


const Big=keyframes`

0%{
width:23rem;
height:17rem;
}

100%{
  width:28rem;
  height: 22.3rem;
  margin-top: -1.4rem;
}

`;



const Image=styled.img`
height: 17rem;
width: 23rem;
transition: all 0.2s ease;
`;


const slide=keyframes`

0%{
width: 0rem;
}

100%{
width: 28rem;
}

`;


const Black=styled.div`
margin-bottom: 26.1rem;
width: 0rem;
height: 22.2rem;
background-color: #0000003e;
position: absolute;
z-index: 4444;
display: flex;
flex-direction: column;
transition: all 0.2s ease;
&:hover{
  animation: ${slide} 0.2s linear forwards;
}

&:hover ${Image}{
  animation: ${Big} 0.2s linear forwards;
}


`





const Wrapper=styled.div`
width: 28rem;
height: 25rem;
background-color: #C5C5C5;
display: flex;
margin-bottom: 2.7rem;
justify-content: center;
align-items: center;
flex-direction: column;
transition: all 0.2s ease;
margin-right: 4rem;




&:hover ${Black} {
  animation: ${slide} 0.2s linear forwards;

}


&:hover ${Image} {
  animation: ${Big} 0.2s linear forwards;
}




.com{
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: inherit;
  height: 23rem;


  .cat{
    position: absolute;
    border-radius: 2rem;
    color: #9b55c6;
    background-color: #FFFFFF;
    padding: 0.2rem 1.5rem;
    top: 3.5rem;
    right: 3.5rem;
    z-index: 66666;
   
    p{
      text-decoration: none;
      font-size: 1.2rem;


    
    }

  }

}

.detail{
 display:flex;
 justify-content:space-between;
 align-items:center;
 width: 28rem;


 p{
  font-size:1.2rem;
  padding: 0rem 2.5rem;
  overflow: hidden;
  white-space: nowrap;

 }

 .names{
  color:#676565 !important;
 }

}




@media (min-width:300px) and (max-width:600px){

width: 28rem;
height: 25rem;
background-color: #C5C5C5;
display: flex;
margin-bottom: 2.7rem;
justify-content: center;
align-items: center;
flex-direction: column;
margin-right: 0rem;
transition: all 0.2s ease;



&:hover ${Black} {
  animation: ${slide} 0.2s linear forwards;

}


&:hover ${Image} {
  animation: ${Big} 0.2s linear forwards;
}




.com{
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: inherit;
  height: 23rem;


  .cat{
    position: absolute;
    border-radius: 2rem;
    color: #9b55c6;
    background-color: #FFFFFF;
    padding: 0.2rem 1.5rem;
    top: 3.5rem;
    right: 3.5rem;
    z-index: 66666;
   
    p{
      text-decoration: none;
      font-size: 1.2rem;


    
    }

  }

}

.detail{
 display:flex;
 justify-content:space-between;
 align-items:center;
 width: 28rem;


 p{
  font-size:1.2rem;
  padding: 0rem 2.5rem;
  overflow: hidden;
  white-space: nowrap;

 }

 .names{
  color:#676565 !important;
 }

}




}



`;