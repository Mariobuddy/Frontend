import React from 'react'
import styled from 'styled-components';
import Currency from './Currency';
import { Button } from '../Header/Header';
import { UseProducts } from '../Context/ProductsContext';
import { BsCheckLg } from "react-icons/bs";



const MenuNav = ({open}) => {




const {SearchFilter,Clear,Filters:{text,colors,company,maxPrice,minPrice,Price},AllProducts,gline}=UseProducts();








let Select=(data,pro)=>{

 let cat= data && data.map((val)=>{
    
  return val[pro] 
  })

  return ['All',...new Set(cat)];

}


let SelectCat=Array.from(Select(AllProducts,'category'));


let Select2=(data,pro)=>{

  let cat= data && data.map((val)=>{
     
   return val[pro] 
   })
 
   return ['All',...new Set(cat)];
 
 }
 
 
 let SelectCat2=Array.from(Select2(AllProducts,'company'));



 let Select3=(data,pro)=>{

  let cat= data && data.map((val)=>{
     
   return val[pro] 
   })
 
   return new Set(['All'].concat(...cat));
 
 }
 
 
 let SelectCat3=Array.from(Select3(AllProducts,'colors'));






  return (
    <Wrapper open={open}>
    
    <div className={'menu'}>

   
        <p className='fil' style={{position:'relative',display:'none',fontSize:'2rem',left:'8rem',top:'4.5rem'}}>Filters</p>



      <div className='search'>
        
        <form onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder='SEARCH' onChange={SearchFilter}  name='text' value={text}/>
        </form>

      </div>



       <div className='category'>

       <label>Category</label>
        
       <ul>
        
        {
          SelectCat.map((val,i)=>{
           return <button type='button' id={i.toString()} className={gline===i.toString()?'takey':''} onClick={SearchFilter} key={i} value={val} name='category'>{val}</button>
          })
        }

        </ul>
         
       </div>


      <div className='company' id='sele'>

      <label>Company</label>
 
      <select name={'company'}  onClick={SearchFilter} >

        {
         SelectCat2.map((val)=>{
          return <option name='company'  value={val} key={val} selected={company===val?true:false} className={'opp'} >{val}</option>
         })
        }
        
     </select>

      </div>

      <div className='colors'>
        <label>Colors</label>
       
        <div className='colone'>
        
        {

SelectCat3.map((val,i)=>{
  
  if(val==='All'){
    return <button style={{backgroundColor:'transparent',border:'none',outline:'none',margin:'0rem 0.5rem',fontSize:'1.6rem'}} className={colors==='All'?'takey3 makele':'makele'}  key={i} name='colors' value={val} type='button' onClick={SearchFilter} >All</button>
  }


  return <button className={colors===val?'cir bactive':'cir'} key={i} name='colors' value={val} type='button' onClick={SearchFilter} style={{backgroundColor:val}}> {colors===val? <BsCheckLg className='check'/>:null} </button>
})
}


        </div>

      </div>


      <div className='price'>

      <label>Price</label>
          <p>{<Currency price={Price} />}</p>
         <input type='range' className='ranger' min={minPrice} value={Price} name='Price'  onChange={SearchFilter} max={maxPrice}/>

       </div>


       <Button onClick={()=>{
        Clear();
       }} type='button'>CLEAR FILTERS</Button>



        </div>
     


    </Wrapper>
  )
}

export default MenuNav;


const Wrapper=styled.div`

width: inherit;
height: inherit;
transition: all 0.5s linear;


.bactive{
  filter:brightness(100%) !important;
}


.takey{
text-decoration: underline;
text-decoration-color:var(--maincol) !important;
color: var(--maincol) !important;
text-decoration-thickness: 0.4rem;
text-underline-offset: 0.4rem;
z-index: 88;
}

.takey3{
text-decoration: underline;
text-decoration-color:var(--maincol) !important;
color: var(--maincol) !important;
text-decoration-thickness: 0.4rem;
text-underline-offset: 0.4rem;
z-index: 88;
}


.takey2{
text-decoration: underline;
text-decoration-color:var(--maincol) !important;
color: var(--maincol) !important;
text-decoration-thickness: 0.4rem;
text-underline-offset: 0.4rem;
}



.makele{
    color: var(--maincol);
  }



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

margin-bottom: 0rem;

label{
font-size: 1.6rem;
font-weight: 500;
}

ul{
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  button{
    background-color: transparent;
    font-size: 1.5rem;
    color: var(--txt);
    margin-bottom: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    outline: none;

  }

}

}


.company{

display: flex;
flex-direction: column;
margin-top: 1rem;

label{
  font-size: 1.6rem;
  font-weight: 500;
}


select{
    background-color: transparent;
    width:14rem;
    outline: none;
    border: 1px solid var(--txt);
    height: 3.1rem;
    margin-top: 1rem;
    padding-left: 0.5rem;
    color: var(--maincol);

    &:hover{
      color: var(--maincol);

    }

   
    option{
    font-size: 1.3rem;
    color: var(--txt);
    }

  } 


}

.colors{
margin-top: 2rem;
margin-bottom: 2rem;
display: flex;
flex-direction: column;


label{
  font-size: 1.6rem;
  font-weight: 500;
}

.colone{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;



  .cir{
    margin-top: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    cursor: pointer;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-top: -0.1rem;
    filter: brightness(60%);


    .check{
      color: #FFFFFF;
      filter: brightness(100%);
      font-weight: 700;
      
    }


}



}


}


.price{
margin-bottom: 2rem;


label{
font-size: 1.6rem;
font-weight: 500;
}

.ranger{
  background-color: #c1b7b7 !important;
  z-index: 333;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 1rem;
  height: 0.8rem;
  cursor: pointer;

  &::-moz-range-thumb{
    background-color:#FFFFFF;
    border: 4px solid var(--maincol);
    border-radius: 100%;
    width: 0.8rem;
    height: 0.8rem;
  }

  
  &::-webkit-slider-thumb{
    background-color:#FFFFFF;
    border: 4px solid var(--maincol);
    -webkit-appearance: none;
    border-radius: 100%;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: -0.4rem;
  }

  &::-moz-range-progress{
    background-color:var(--maincol);
    height: inherit;
    height: 0.7rem;
    width: inherit;
    border-radius: 1rem;

  }

  &::-webkit-slider-runnable-track{
    background-color:var(--maincol);
    height: 0.8rem;
    border-radius: 1rem;
  }

}



p{
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;

}

}


}



@media (min-width:300px) and (max-width:600px){


width: inherit;
height: inherit;



.takey{
text-decoration: underline;
text-decoration-color:#FFFFFF !important;
color: #FFFFFF !important;
text-decoration-thickness: 0.4rem;
text-underline-offset: 0.4rem;
z-index: 88;
}


.takey3{
text-decoration: underline;
text-decoration-color:#FFFFFF !important;
color: #FFFFFF !important;
text-decoration-thickness: 0.4rem;
text-underline-offset: 0.4rem;
z-index: 88;
}

.makele{
    color: #FFFFFF;
  }






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


.fil{
    display: block !important;
    z-index: 88888888;
}

  .search{
  margin-bottom: 2rem;
  margin-top: 6.8rem;

  
  


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

   button{
    color: #FFFFFF !important;
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
      width:14.5rem;
      outline: none;
      border: 1px solid #FFFFFF;
      height: 3.1rem;
      margin-top: 1rem;
      padding-left: 0.5rem;
      padding-right: 1rem;
      color: #FFFFFF !important;

     
      option{
      font-size: 1.5rem;
      color: #FFFFFF !important;
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
      color: #FFFFFF;

  }

}


.price{
margin-bottom: 2rem;

  
label{
font-size: 1.6rem;
font-weight: 500;
  }

  .ranger{
    
  background-color: #c1b7b9;
  -moz-appearance: none;
  -webkit-appearance: none;
   appearance: none;
  border-radius: 1rem;
  height: 0.8rem;
  cursor: pointer;

  &::-moz-range-thumb{
    background-color:#FFFFFF;
    border: 4px solid var(--oran);
    border-radius: 100%;
    width: 1rem;
    height: 1rem;
  }

  
  &::-webkit-slider-thumb{
    background-color:#FFFFFF;
    -webkit-appearance: none;
    border: 4px solid var(--oran);
    border-radius: 100%;
    width: 1.8rem;
    height: 1.8rem;
    margin-top: -0.6rem;
  }

  &::-moz-range-progress{
    background-color:var(--oran);
    height: inherit;
  border-radius: 1rem;

  }


  &::-webkit-slider-runnable-track{
    background-color:var(--oran);
    height: 0.8rem;
    border-radius: 1rem;
  }



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