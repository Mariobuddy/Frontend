import React from 'react'
import styled from 'styled-components';
import Currency from './Currency';
import { Button } from '../Header/Header';

const MenuNav = ({open}) => {
  return (
    <Wrapper open={open}>
    
    <div className={'menu'}>

   
        <p className='fil' style={{position:'relative',fontSize:'2rem',left:'8rem',top:'4.5rem'}}>Filters</p>



      <div className='search'>
      <input type='text' placeholder='SEARCH'/>
      </div>



       <div className='category'>

       <label>Category</label>
        
       <ul>
           <li>All</li>
           <li>Shirt</li>
           <li>Tshirt</li>
           <li>Watch</li>
           <li>Shoes</li>
           <li>Jeans</li>
        </ul>
         
       </div>


      <div className='company'>

      <label>Company</label>
 
        <select>
          <option>All</option>
          <option>Roadster</option>
          <option>Louis Philippe</option>
          <option>Puma</option>
          <option>Tommy Hilfigure</option>
          <option>Sonata</option>
     </select>

      </div>

      <div className='colors'>
        <label>Colors</label>
       
       <div className='cir'></div>

      </div>


      <div className='price'>

      <label>Price</label>
          <p>{<Currency price={60000} />}</p>
         <input type='range' />

       </div>


       <Button>CLEAR FILTERS</Button>



        </div>
     


    </Wrapper>
  )
}

export default MenuNav;


const Wrapper=styled.div`

width: inherit;
height: inherit;
transition: all 0.5s linear;

.menu{

width: inherit;
height: inherit;



.search{
margin-bottom: 2rem;

input{
border: 1px solid var(--txt);
height: 3.1rem;
width: 16rem;
padding-left: 1rem;
outline: none;



&::placeholder{
  color: var(--txt);

}

}



}


.category{

margin-bottom: 2rem;

label{
font-size: 1.6rem;
font-weight: 500;
}

ul{

  li{
    list-style-type: none;
    font-size: 1.5rem;
    color: var(--txt);
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

}

}


.company{

display: flex;
flex-direction: column;

label{
  font-size: 1.6rem;
  font-weight: 500;
}


select{
    background-color: transparent;
    width:13rem;
    outline: none;
    border: 1px solid var(--txt);
    height: 3.1rem;
    margin-top: 1rem;
    padding-left: 1rem;
    color: var(--txt);

   
    option{
    font-size: 1.5rem;
    color: var(--txt);
    }

  } 


}

.colors{
margin-top: 2rem;
margin-bottom: 2rem;


label{
  font-size: 1.6rem;
  font-weight: 500;
}

.cir{
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: red;

}

}


.price{
margin-bottom: 2rem;


label{
font-size: 1.6rem;
font-weight: 500;
}

p{
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

}

}


}



@media (min-width:300px) and (max-width:600px){





.menu{
position: fixed;
padding-top: 2rem;
width: 62vw;
height: 100vh;
background-color: var(--maincol);
z-index: 444444;
padding-left: 1rem;
right: 0;
top: 0rem;
transition: 0.5s ease;
transform: ${({open})=>open ? 'translateX(100%)':'translateX(0)'};



  .search{
  margin-bottom: 2rem;
  margin-top: 5.5rem;

  
  


  input{
  border: 1px solid var(--txt);
  height: 3.1rem;
  width: 16rem;
  padding-left: 1rem;
  outline: none;



  &::placeholder{
    color: var(--txt);

  }

  }

 
  
}


.category{

  margin-bottom: 2rem;

  label{
 font-size: 1.6rem;
 font-weight: 500;
  }
  
  ul{

    li{
      list-style-type: none;
      font-size: 1.5rem;
      color: #FFFFFF;
      margin-bottom: 2rem;
      margin-top: 1rem;
    }

  }

}


.company{

  display: flex;
  flex-direction: column;

  label{
    font-size: 1.6rem;
    font-weight: 500;
  }

  
  select{
      background-color: transparent;
      width:13rem;
      outline: none;
      border: 1px solid #FFFFFF;
      height: 3.1rem;
      margin-top: 1rem;
      padding-left: 1rem;
      color: #FFFFFF;

     
      option{
      font-size: 1.5rem;
      color: var(--txt);
      }

    } 


}

.colors{
  margin-top: 2rem;
  margin-bottom: 2rem;
  

  label{
    font-size: 1.6rem;
    font-weight: 500;
  }

  .cir{
      margin-top: 0.5rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: red;

  }

}


.price{
margin-bottom: 2rem;

  
label{
font-size: 1.6rem;
font-weight: 500;
  }

  p{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color:#FFFFFF;

  }

}



}



}



`;