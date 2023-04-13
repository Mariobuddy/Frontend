import React from 'react'
import styled,{keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom';
import Currency from './Currency';

const FeaturedRender = (val) => {
  const {category,name,image,price,id:idchan}=val;


  return (
      <NavLink to={`products/single/${idchan}`} style={{textDecoration:'none',color:'#9b55c6'}}>

        <Wrapper>

       <div className='com'>
         <Image alt='Error' src={image}/>
         <div className='cat'><p>{category}</p></div>
       </div>
       
       <div className='detail'>
        <p className='names'>{name}</p>
        <p><Currency price={price}/></p>
       </div>
         
         <Black/>
      
        </Wrapper>



      </NavLink>
  )
}

export default FeaturedRender;


const Big=keyframes`

0%{
width:23rem;
height:17rem;
}

100%{
  width:28rem;
  height: 22.3rem;
}

`;



const SBig=keyframes`

0%{
width:23rem;
height:17rem;
}

100%{
  width:28rem;
  height: 22rem;
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




const Image=styled.img`
height: 17rem;
width: 23rem;
`;





const Black=styled.div`
width: 0rem;
height: 22.2rem;
background-color: #0000003e;
position: absolute;
top: 0;
z-index: 4444;
margin-top: 1rem;

&:hover{
  animation: ${slide} 0.2s linear forwards;
}

&:hover{
  animation:  0.2s linear forwards;
}

@media (min-width:300px) and (max-width:600px){
 top: initial;
 width: 0rem;
height: 21.8rem;
background-color: #0000003e;
position: absolute;
z-index: 4444;
margin-top: -23rem;
}
`;



const Wrapper=styled.div`

width: 28rem;
height: 25rem;
background-color:#FFFFFF;


&:hover ${Black}{
  animation: ${slide} 0.2s linear forwards;
}


&:hover ${Image}{
  animation: ${Big} 0.2s linear forwards;
}





.com{
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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

 p{
  font-size:1.2rem;
  padding:0.8rem 2.5rem 0rem 2.5rem;
  white-space:nowrap;

 }

 .names{
  color:#676565 !important;
 }

}

@media (min-width:300px) and (max-width:600px){

width: 28rem;
height: 25rem;
background-color:#FFFFFF;
margin-bottom:5rem;



&:hover ${Black}{
  animation: ${slide} 0.2s linear forwards;
}


&:hover ${Image}{
  animation: ${SBig} 0.2s linear forwards;
}

.com{
  height: 22rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
 justify-content:center;
 align-items:center;
 height: fit-content;
 position: relative;
 top: 1rem;

 p{
  font-size:1.2rem;
  padding:0.8rem 2.5rem 0rem 2.5rem;
  margin-top:-1.5rem
 }

 .names{
  color:#676565 !important;
 }

}






}

`;
