import React,{useEffect,useState} from 'react'
import styled,{ThemeProvider} from 'styled-components';
import { UseCustom } from '../Context/MainContext';
import { NavLink, useParams } from 'react-router-dom';
import HeaderNav from '../MainBody/HeaderNav';
import Stars from '../MainBody/Stars';
import Currency from '../MainBody/Currency';
import { TbReplaceFilled } from "react-icons/tb";
import { GrServices } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { HiMinusSm } from "react-icons/hi";
import { Button } from '../Header/Header';
import FourImages from '../MainBody/FourImages';
import { UseCart } from '../Context/CartContext';


const Single = () => {
   
   

  const {SingleLoading,SingleProduct}=UseCustom();
  const {Carting}=UseCart();

  const {id}=useParams();

  const {id:idchan,name,company,images,stars,reviews,price,colors,stock,description}=  SingleProduct && SingleProduct;

   const [gcount,scount]=useState(1);

   const [gtick,stick]=useState(colors && colors[0]);




   let make=()=>{
    if(gtick===undefined){
      return 'block'
    }else{
     return 'none'
    }
  }

  let takeit=make();



let theme={
displayone:takeit
}





  let Inc=()=>{
    
    if(gcount<stock){
      scount(gcount+1);
    }

  }



  let Drc=()=>{

      if(gcount<=1){
        scount(1);
      }else{
        scount(gcount-1);
      }
     
      

    }

    const DataTran=async(e)=>{
      try {

        let data1=await fetch('http://localhost:8000/cart',{
          method:'POST',
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:'include',
          body:JSON.stringify({idchan,price,gcount,gtick,SingleProduct})
        });
        
        console.log(data1);
      } catch (error) {
        console.log(error);
      }
    }
    

useEffect(()=>{
  SingleLoading(`http://192.168.0.101:5000/api/products/${id}`);
},[]);

useEffect(() => {
  window.scrollTo(0, 0)
}, [])
   

  return (
    
    <ThemeProvider theme={theme}>

<Wrapper gtick={gtick}>

<HeaderNav/>

<div className='divmain'>


<div className='div11'>

<FourImages images={images}/>

</div>


<div className='div2'>

<h1 style={{color:'#525252',fontSize:'2.5rem'}}>{name}</h1>

<Stars star={stars} review={reviews}/>

<p className='pcut'>MRP : <span className='cut'>{<Currency price={price}/>}</span></p>

<p className='deal'>Deal of the Day : {<Currency price={price-50}/>}</p>

<p className='des'>{description}</p>


<div className='box'>

<div className='div1'>

<div className='cir' ><TbTruckDelivery className='emo'/></div>

<p>Free Delivery</p>

</div>
<div className='div1'>
  <div className='cir'><MdSecurity className='emo' /></div>
  <p>2 Years Warranty</p>
</div>
<div className='div1'>
<div className='cir'><GrServices className='emo'/></div>
<p>After Sale Service</p>
</div>
<div className='div1'>
<div className='cir'> <TbReplaceFilled className='emo'/></div>
<p>7 Days Replacement</p>
</div>


</div>

<p className='stock'>Available : {stock>1?<span>In Stock</span>:<span>Not Available</span>}</p>

<p className='idone'>ID : <span>{idchan}</span></p>

<p className='brand'>Brand : <span>{company}</span></p>

<div className='col' style={{width:'fit-content',height:'fit-content',display:'flex',justifyContent:'center',alignItems:'center'}}><p style={{fontSize:'1.2rem',color:'var(--txt)'}}>Colors :</p> {

colors && colors.map((val)=>{
return <div key={val} className={gtick===val?'active':null} onClick={()=>stick(val)}  style={{backgroundColor:val,width:'1.4rem',height:'1.4rem',borderRadius:'50%',marginLeft:'1rem',cursor:'pointer',filter:'brightness(60%)'}}>{gtick===val?<BsCheckLg style={{color:'#FFFFFF',width:'inherit',height:'inherit',fontSize:'fit-content',display:'flex',justifyContent:'center',alignItems:'center'}}/>:null}</div>
})

}</div>

<p className='pone'  id='pname'>Please Choose Color</p>


<div className='count'>
<GrFormAdd className='add' onClick={()=>{
Inc();
}} /><p>{gcount}</p><HiMinusSm className='minus' onClick={()=>{
Drc();
}} />
</div>

<NavLink to={`/cart`}  onClick={async(e)=>{
if(gtick===undefined){
  e.preventDefault();
  document.getElementById('pname').style.color='red';
  document.getElementById('pname').style.display='block';
}




Carting(idchan,price,gcount,gtick,SingleProduct);

}}><Button className='but' type='submit' onClick={DataTran}>ADD TO CART</Button></NavLink>

</div>



</div>

  </Wrapper>

    </ThemeProvider>
  
  )
}

export default Single;


const Wrapper=styled.div`
width:100vw;
height:fit-content;


.active{
 filter: brightness(100%) !important;
}

.divmain{
  height:fit-content;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 6rem 0rem 2rem 6rem;




  .div11{
 width:32vw;
 height:inherit;
 margin-right: 5rem;


}



.div2{
 width:28vw;
 height:inherit;
 display:flex;
 justify-content:flex-start;
 flex-direction:column;
 position: relative;


 .ptwo{

 }


 .pone{
  font-size: 1.4rem;
  margin-top: 1rem;
  position: absolute;
  bottom: 7.7rem;
  left: 19.5rem;
  display: none;
 }


.pcut{
  font-size:1.2rem;
  font-weight:bold;
  margin-top: 1rem;
  

  .cut{
  text-decoration: line-through;
 }

}

.box{
  display:flex;
  justify-content:space-between;
  width:fit-content;

  

  .div1{
    display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      margin-bottom: 1rem;
      margin-right: 1rem;

    
    .cir{
      width:3rem;
      height:3rem;
      background-color:#f0efef;
      border-radius:50%;
      display:flex;
      justify-content:center;
      align-items:center;


      .emo{
        font-size:1.5rem;
     }
     
   

    }

    p{
      color: var(--txt);
      font-size: 1rem;
      white-space: nowrap;

     }

  }
}

.deal{
  color:var(--maincol);
  font-size:1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

}


}

.stock{
  font-size: 1.2rem;
  color: var(--txt);
  margin-bottom: 1rem;


  span{
    color: black;
  }
}

.idone{

  font-size: 1.2rem;
  color: var(--txt);
  margin-bottom: 1rem;

  span{
  color: black;
  }

  
}

.brand{
 

  font-size: 1.2rem;
  color: var(--txt);
  margin-bottom: 2rem;
  position: relative;

  span{
  color: black;
  }

  &::after{
   
   content:'';
   position:absolute;
   width:34rem;
   height:0.2rem;
   background-color:var(--txt);
   top:2.8rem;
   left:0rem;

 }




}

.des{
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--txt);
  width: 26vw;
  height: fit-content;
}

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

.but{
  width:10rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  height: 3.5rem;
}



@media (min-width:300px) and (max-width:600px){

width:100vw;
height:fit-content;


.active{
 filter: brightness(100%) !important;
}

.divmain{
  height:fit-content;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 3rem 0rem 2rem 0rem;
  flex-direction: column;




  .div11{
 width:fit-content;
 height:inherit;
 margin-right: 0rem;

}



.div2{
 width:100vw;
 height:inherit;
 display:flex;
 justify-content:flex-start;
 flex-direction:column;
 margin-top: 5rem;
 padding-left: 1rem;


.pcut{
  font-size:1.2rem;
  font-weight:bold;
  margin-top: 1rem;
  

  .cut{
  text-decoration: line-through;
 }

}

.box{
  display:flex;
  justify-content:space-between;
  width:fit-content;


  

  .div1{
    display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      margin-bottom: 1rem;
      margin-right: 1rem;

    
    .cir{
      width:3rem;
      height:3rem;
      background-color:#f0efef;
      border-radius:50%;
      display:flex;
      justify-content:center;
      align-items:center;


      .emo{
        font-size:1.5rem;
     }
     
   

    }

    p{
      color: var(--txt);
      font-size: 1rem;
      white-space: nowrap;

     }

  }
}

.deal{
  color:var(--maincol);
  font-size:1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

}


}

.stock{
  font-size: 1.2rem;
  color: var(--txt);
  margin-bottom: 1rem;

  span{
    color: black;
  }
}

.idone{

  font-size: 1.2rem;
  color: var(--txt);
  margin-bottom: 1rem;

  span{
  color: black;
  }

  
}

.brand{
 

  font-size: 1.2rem;
  color: var(--txt);
  margin-bottom: 2rem;
  position: relative;

  span{
  color: black;
  }

  &::after{
   
   content:'';
   position:absolute;
   width:35rem;
   height:0.2rem;
   background-color:var(--txt);
   top:2.8rem;
   left:0rem;

 }




}

.des{
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--txt);
  width: 96vw;
  height: fit-content;
}

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

.but{
  width:10rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  height: 3.5rem;
}


}


`;