import React,{useEffect} from 'react'
import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { UseProducts } from '../Context/ProductsContext';
import Grid from '../MainBody/Grid';
import List from '../MainBody/List';
import HamBurger from '../MainBody/HamBurger';
import EmptyPro from '../MainBody/EmptyPro';
import Loading from '../MainBody/Loading';


const Products = () => {



const {Filter_Products,GridOne,Listone,Grids,SortSelect,SortSel,FilLoad}=UseProducts();





  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

   

  return (

    <Wrapper>


  <div className='left'>

   <HamBurger/>

    </div>


    {

      Filter_Products.length>0?


      <div className='right'>
        
      <div className='navone'>

       <div className='one1'>

       <div className={Grids ? 'one activa':'one' } onClick={GridOne}><TfiLayoutGrid2Alt  className='icon'/></div>
       
      <div className={!Grids ? 'one activa':'one' } onClick={Listone}><GiHamburgerMenu className='icon'/></div>

       </div>



       <div className='two2'>
       <p style={{fontSize:'1.2rem'}}>{Filter_Products && Filter_Products.length} total products</p>
       </div>
      

      <div className='three3'>
      
      <form action='#'>

         <select onClick={SortSelect} name='sort'>
        <option value={'recom'}  selected={SortSel==='recom'?true:false} id='sort1' name='sort'>Recommended</option>
        <option value={'lowest'}  id='sort2' selected={SortSel==='lowest'?true:false}  name='sort'>Price(Lowest)</option>
        <option value={'highest'} id='sort3' selected={SortSel==='highest'?true:false} name='sort'>Price(Highest)</option>
        <option value={'atoz'}  id='sort4' selected={SortSel==='atoz'?true:false} name='sort'>Price(a-z)</option>
        <option value={'ztoa'} id='sort5' selected={SortSel==='ztoa'?true:false} name='sort'>Price(z-a)</option>
        </select>



      </form>

      </div>
         
      </div>
      

      <div className='loadpro'>
       
        {
          Grids===true?
          <Grid/>:<List/>
        }

      </div>


    </div>

    :<Con><Loading/></Con>

    }



    </Wrapper>
  )

}

export default Products;


const Con=styled.div`
width: 60vw;
height: 80vh;
display: flex;
justify-content: center;
align-items: center;


@media (min-width:300px) and (max-width:600px){
height: 55vh;

}

`;


const Wrapper=styled.div`

width:100vw;
height: fit-content;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 3rem 0rem;

.activa{
  background-color: black !important;
  color: #FFFFFF;
}


.hidden{
display: none;
}


.visible{
display: block;
}


.ham .clicked{

  &:nth-child(1){
    transition: 0.5s ease;
    transform: rotate(45deg) translate(0.75em,1.25em);

  }

  &:nth-child(2){
    transition: 0.5s ease;
    transform: scale(0.1);
  }


  &:nth-child(3){
    transition: 0.5s ease;
    transform: rotate(135deg) translate(-0.5em,1em);
  }


}



.left{
  
width: fit-content;
height: fit-content;
z-index: 555555;
margin-right: 2rem;

}


.right{
width: 60vw;
height: fit-content;



.navone{
  display: flex;
  justify-content: space-between;
  align-items: center;

  .one1{
     

    display: flex;
    justify-content: center;
    align-items: center;
    
    
    .one{
    width: 4rem;
    height: 3.2rem;
    background-color: #AEAEAE;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;



      .icon{
       font-size: 1.8rem;
      }

    }


  }

  .three3{

   
    select{
      background-color: transparent;
      outline:none;
      border: 1px solid var(--txt);
      width: 13rem;
      height: 3.1rem;
      padding-left: 1rem;
      font-size: 1.2rem;
  
    }

  }

}

.loadpro{
  width: 60vw;
  height: fit-content;
}

}








@media (min-width:300px) and (max-width:600px){


width:100vw;
height: fit-content;
display: flex;
justify-content: center;
align-items: flex-start;
padding: 0rem 0rem;
margin-bottom: 6.5rem;



.activa{
  background-color: black !important;
  color: #FFFFFF;
}


.hidden{
display: none;
}


.visible{
display: block;
}




.clicked{

&:nth-child(1){
  transition: 0.5s ease;
  transform: rotate(45deg) translate(0.75em,1.25em);


}

&:nth-child(2){
  transition: 0.5s ease;
  transform: scale(0.1);
}


&:nth-child(3){
  transition: 0.5s ease;
  transform: rotate(135deg) translate(-0.5em,1em);

}


}




.actives{
  display: block !important;
}



.left{
position: absolute;
width: fit-content;
height: fit-content;


}


.right{
width: fit-content;
height: fit-content;


.navone{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;


  .one1{
     

    display: flex;
    justify-content: center;
    align-items: center;
    
    
    .one{
    width: 4rem;
    height: 3.2rem;
    background-color: #AEAEAE;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;



      .icon{
       font-size: 1.8rem;


      }

    }


  }

  .two2{

     
    margin-left: 2rem;

    p{
      white-space: nowrap;
    }

  }

  .three3{

    position: absolute;
    right: 0.1rem;
   
    select{
      background-color: transparent;
      outline:none;
      border: 1px solid var(--txt);
      width: 13rem;
      height: 3.1rem;
      padding-left: 1rem;
      font-size: 1.2rem;
    }

  }


}

.loadpro{
  width: 100vw;
  height: fit-content;
}

}






}

`;